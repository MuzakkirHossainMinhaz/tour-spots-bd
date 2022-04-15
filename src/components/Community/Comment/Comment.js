import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase.init";
import { v4 as uuidv4 } from "uuid";
import './Comment.css'

export default function Comment({ id }) {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [currentlyLoggedinUser] = useAuthState(auth);
    const commentRef = doc(db, "Blogs", id);

    useEffect(() => {
        const docRef = doc(db, "Blogs", id);
        onSnapshot(docRef, (snapshot) => {
            setComments(snapshot.data().comments);
        });
    }, []);

    const handleChangeComment = (e) => {
        if (e.key === "Enter") {
            updateDoc(commentRef, {
                comments: arrayUnion({
                    user: currentlyLoggedinUser.uid,
                    userName: currentlyLoggedinUser.displayName,
                    comment: comment,
                    createdAt: new Date(),
                    commentId: uuidv4(),
                }),
            }).then(() => {
                setComment("");
            });
        }
    };

    // delete comment function
    const handleDeleteComment = (comment) => {
        console.log(comment);
        updateDoc(commentRef, {
            comments: arrayRemove(comment),
        })
            .then((e) => {
                console.log(e);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <div>
            <div className="comment">Comment:</div>
            <div className="comment-field">
                {comments !== null &&
                    comments.map(({ commentId, user, comment, userName, createdAt }) => (
                        <div key={commentId}>
                            <div className="show-comment">
                                <div>
                                    <span
                                        className="comment-user"
                                        style={{ backgroundColor: `${user === currentlyLoggedinUser.uid ? "green" : "blue"}` }}
                                    >
                                        {userName}
                                    </span>
                                    {comment}
                                </div>
                                <div>
                                    {user === currentlyLoggedinUser.uid && (
                                        <i
                                            class="material-icons"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleDeleteComment({ commentId, user, comment, userName, createdAt })}
                                        >clear</i>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                {currentlyLoggedinUser && (
                    <input
                        type="text"
                        style={{ marginTop: "1rem", padding: "7px", width: "100%", fontSize: "14px" }}
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                        placeholder="Add a comment"
                        onKeyUp={(e) => {
                            handleChangeComment(e);
                        }}
                    />
                )}
            </div>
        </div>
    );
}