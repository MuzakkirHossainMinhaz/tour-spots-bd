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
                        <div className="card mb-3 rounded-3" key={id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Link to={`/community/blog/${id}`}>
                                        <img src={imageUrl} className="img-fluid rounded-start" alt="" />
                                    </Link>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                {createdBy && (
                                                    <span className="author">{createdBy}</span>
                                                )}
                                                {!createdBy && (
                                                    <span className="author">unknown</span>
                                                )}
                                            </div>
                                            <div className="d-flex flex-row-reverse">
                                                {user && user.uid === userId && (
                                                    <DeleteArticle id={id} imageUrl={imageUrl} />
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="card-title">{title}</h3>
                                        <p className="card-text">{description}</p>
                                        <div className="d-flex flex-row-reverse">
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
                                        <p className="card-text"><small className="text-muted">{createdAt.toDate().toDateString()}</small></p>
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