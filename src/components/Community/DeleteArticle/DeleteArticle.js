import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import './DeleteArticle.css'
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../../firebase.init";

export default function DeleteArticle({ id, imageUrl }) {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this article?")) {
            try {
                await deleteDoc(doc(db, "Blogs", id));
                toast("Article deleted successfully", { type: "success" });
                const storageRef = ref(storage, imageUrl);
                await deleteObject(storageRef);
            } catch (error) {
                toast("Error deleting article", { type: "error" });
                console.log(error);
            }
        }
    };
    return (
        <div>
            <i
                className="material-icons"
                onClick={handleDelete}
                style={{ cursor: "pointer", color: "red" }}
            >clear</i>
        </div>
    );
}