import React from "react";
import appwriteService from "../appwrite/config_service";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const imagePreview = featuredImage ? appwriteService.getFilePreview(featuredImage) : '';
  console.log("featuredImage:", featuredImage);
  return (
    <Link to={`/post/${$id}`}>
      <div className={`w-full bg-gray-100 rounded-xl p-4`}>
        <div className="w-full justify-center mb-4">
          <img
            src={imagePreview}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
