import React from "react";
import appwriteService from "../appwrite/config_service";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featured_image }) {
  const imagePreview = featured_image ? appwriteService.getFilePreview(featured_image) : '';
  
  return (
    <Link to={`/post/${$id}`}>
      <div className={`w-full bg-gray-100 rounded-xl p-3 pb-0`}>
        <div className="w-full justify-center mb-2 h-40">
          <img
            src={imagePreview}
            alt={title}
            className="rounded-xl h-full"
          />
        </div>
        <h2 className="text-xl font-mono font-semibold  overflow-hidden">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
