import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config_service";
import { Btn, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import {Loading} from "../components/index"
export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor =
    post && userData ? post.userid === userData.userData.$id : false;
//  console.log("usrid", userData.userData.$id);
//  console.log("post data", isAuthor);
//  console.log("post id", post.userid);

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featured_image);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-4">
      <Container>
        {/* {console.log("post", post)} */}
        <div className="w-full h-full relative border rounded-xl p-2">
          <img
            src={appwriteService.getFilePreview(post.featured_image)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Btn
                  textColor=""
                  bgColor="bg-green-500"
                  className="mr-3 text-center text-2xl w-full mb-3"
                >
                  Edit
                </Btn>
              </Link>
              <Btn
                textColor=""
                bgColor="bg-red-500"
                onClick={deletePost}
                className="mr-3 h-full text-center text-xl w-full mb-3"
              >
                Delete
              </Btn>
            </div>
          )}
        </div>
        <div className="w-full mb-6 d">
          <h1 className="text-6xl px-2 font-mono font-medium">{post.title}</h1>
        </div>
        <div className="browser-css px-5 font-medium text-2xl">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) :  <Container>
  <div className="text-center">
    {
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    }
  </div>
</Container>;
}
