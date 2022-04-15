import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import './Articles.css'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../../firebase.init";
import DeleteArticle from '../DeleteArticle/DeleteArticle'
import LikeArticle from '../LikeArticle/LikeArticle'
import { useAuthState } from "react-firebase-hooks/auth";

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const articleRef = collection(db, "Blogs");
        const q = query(articleRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
            console.log(articles);
        });
    }, []);
    return (
        <div>
            {articles.length === 0 ? (
                <h1 className="notFound">No Blogs Found!</h1>
            ) : (
                articles.map(
                    ({
                        id,
                        title,
                        description,
                        imageUrl,
                        createdAt,
                        createdBy,
                        userId,
                        likes,
                        comments,
                    }) => (
                        <div className="articles" key={id}>
                            <div className="row-1">
                                <div>
                                    <Link to={`/community/blog/${id}`}>
                                        <img
                                            className="img"
                                            src={imageUrl}
                                            alt="titleImage"
                                            style={{ height: 160, width: 160 }}
                                        />
                                    </Link>
                                </div>
                                <div className="text">
                                    <div className="row-2">
                                        <div>
                                            {createdBy && (
                                                <span className="author">{createdBy}</span>
                                            )}
                                        </div>
                                        <div className="d-flex flex-row-reverse">
                                            {user && user.uid === userId && (
                                                <DeleteArticle id={id} imageUrl={imageUrl} />
                                            )}
                                        </div>
                                    </div>
                                    <h2>{title}</h2>
                                    <small>{createdAt.toDate().toDateString()}</small>
                                    <h5>{description}</h5>

                                    <div className="d-flex flex-row-reverse likes">
                                        {user && <LikeArticle id={id} likes={likes} />}
                                        <div className="pe-2">
                                            <p>{likes?.length} likes</p>
                                        </div>
                                        {comments && comments.length > 0 && (
                                            <div className="pe-2">
                                                <p>{comments?.length} comment(s)</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
            )}
        </div>
    );
}