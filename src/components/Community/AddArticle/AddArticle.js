import React, { useState } from "react";
import './AddArticle.css'
import { Link } from "react-router-dom";
import { auth, db, storage } from "../../../firebase.init";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AddArticle() {
    const [user] = useAuthState(auth);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        createdAt: Timestamp.now().toDate(),
    });

    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handlePublish = () => {
        if (!formData.title || !formData.description || !formData.image) {
            alert("Please fill all the fields");
            return;
        }

        const storageRef = ref(
            storage,
            `/images/${Date.now()}${formData.image.name}`
        );

        const uploadImage = uploadBytesResumable(storageRef, formData.image);

        uploadImage.on(
            "state_changed",
            (snapshot) => {
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progressPercent);
            },
            (err) => {
                console.log(err);
            },
            () => {
                setFormData({
                    title: "",
                    description: "",
                    image: "",
                });

                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    const articleRef = collection(db, "Blogs");
                    addDoc(articleRef, {
                        title: formData.title,
                        description: formData.description,
                        imageUrl: url,
                        createdAt: Timestamp.now().toDate(),
                        createdBy: user.displayName,
                        userId: user.uid,
                        likes: [],
                        comments: []
                    })
                        .then(() => {
                            toast("Article added successfully", { type: "success" });
                            setProgress(0);
                        })
                        .catch((err) => {
                            toast("Error adding article", { type: "error" });
                        });
                });
            }
        );
    };

    return (
        <div className="head" style={{ position: "fixed" }}>
            {!user ? (
                <div className="no-user">
                    <h2>To Create Blog</h2>
                    <h1>REGISTER</h1>
                </div>
            ) : (
                <div className="form-group">
                    <h2>Create article</h2>

                    {/* title */}
                    <div className="title">
                        <label htmlFor="">Title</label> <br />
                        <input
                            type="text"
                            name="title"
                            className="title-field"
                            value={formData.title}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    {/* description */}
                    <div className="description">
                        <label htmlFor="">Description</label><br />
                        <textarea
                            name="description"
                            className="description-field"
                            value={formData.description}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    {/* image */}
                    <div className="image">
                        <label htmlFor="">Image</label><br />
                        <input
                            type="file"
                            name="image"
                            className="image-field"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e)}
                        />
                    </div>

                    {progress === 0 ? null : (
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped mt-2"
                                style={{ width: `${progress}%` }}
                            >
                                {`uploading image ${progress}%`}
                            </div>
                        </div>
                    )}
                    <br />
                    <button
                        className="btn"
                        onClick={handlePublish}
                    >
                        Publish
                    </button>
                </div>
            )}
        </div>
    );
}