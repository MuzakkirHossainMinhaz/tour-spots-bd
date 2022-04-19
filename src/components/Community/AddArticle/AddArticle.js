import React, { useState } from "react";
import './AddArticle.css'
import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../../../firebase.init";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Form } from "react-bootstrap";

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
            toast("Please fill all the fields");
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

    const navigate = useNavigate();

    const handleSignin = () => {
        navigate('/login');
    }

    const handleRegister = () => {
        navigate('/logout');
    }

    return (
        <div className="container">
            {!user ? (
                <div className="no-user mt-5">
                    <h2>To Create Blog</h2>
                    <button className="fs-5 fw-bold btn bg-none text-info" onClick={handleSignin}>SIGN IN</button> or
                    <button className="fs-5 fw-bold btn bg-none text-info" onClick={handleRegister}>REGISTER</button>
                </div>
            ) : (
                <div className="form-group">
                    <h2 className="text-info">Create article</h2>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="title"
                                value={formData.title}
                                onChange={(e) => handleChange(e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={formData.description}
                                onChange={(e) => handleChange(e)} />
                        </Form.Group>
                    </Form>

                    {/* title */}
                    {/* className="title-field" */}

                    {/* description */}
                    {/* name="description"
                    className="description-field" */}

                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e)}
                            multiple />
                    </Form.Group>

                    {/* image */}
                    {/* className="image-field" */}

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
                        className="btn btn-info text-white w-100"
                        onClick={handlePublish}
                    >
                        Publish
                    </button>
                </div>
            )}
        </div>
    );
}