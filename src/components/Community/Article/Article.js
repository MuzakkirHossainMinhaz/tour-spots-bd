import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { auth, db } from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import './Article.css'
import Comment from "../Comment/Comment";
import LikeArticle from "../LikeArticle/LikeArticle"

export default function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const docRef = doc(db, "Blogs", id);
        onSnapshot(docRef, (snapshot) => {
            setArticle({ ...snapshot.data(), id: snapshot.id });
        });
    }, []);
    return (
        <div className="mt-5">
            <Link className='blog-goBack' to='/community'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            {article && (
                <div className="grid-blog">
                    <div>
                        <img
                            src={article.imageUrl}
                            alt={article.title}
                            style={{ width: "100%", maxHeight: "550px", padding: "1rem", textAlign: "center" }}
                        />
                    </div>
                    <div className="details">
                        <h1>{article.title}</h1>
                        <small>Author: <b><em>{article.createdBy}</em></b></small>
                        <div className="date"> Posted on: <u>{article.createdAt.toDate().toDateString()}</u></div>
                        <hr />
                        <p style={{ margin: "1rem 0 0 0" }}>{article.description}</p>

                        <div className="d-flex flex-row-reverse">
                            {user && <LikeArticle id={id} likes={article.likes} />}
                            <div className="pe-2">
                                <p>{article.likes.length}</p>
                            </div>
                        </div>
                        {/* comment  */}
                        <Comment id={article.id} />
                    </div>
                </div>
            )}
        </div>
    );
}