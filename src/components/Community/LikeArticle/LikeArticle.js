import React from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LikeArticle({ id, likes }) {
    const [user] = useAuthState(auth);

    const likesRef = doc(db, "Blogs", id);

    const handleLike = () => {
        if (likes?.includes(user.uid)) {
            updateDoc(likesRef, {
                likes: arrayRemove(user.uid),
            }).then(() => {
                console.log("unliked");
            }).catch((e) => {
                console.log(e);
            });
        }
        else {
            updateDoc(likesRef, {
                likes: arrayUnion(user.uid)
            }).then(() => {
                console.log("liked");
            }).catch((e) => {
                console.log(e);
            });
        }
    };
    return (
        <div>
            <b
                style={{
                    cursor: "pointer",
                    fontSize: "20px"
                }}
                onClick={handleLike}
            >
                {!likes?.includes(user.uid) ? <span>&#128142;</span> : <span>&#128147;</span>}
            </b>
        </div>
    );
}