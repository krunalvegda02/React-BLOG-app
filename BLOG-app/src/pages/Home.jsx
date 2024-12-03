import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config_service";
import { Container, Loading1, Loading, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]); // Initialize posts as an empty array
  const userData = useSelector((state) => state.auth.userData);
  console.log("userData", userData);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents || []); // Ensure documents is always an array
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        {" "}
        {/* Center content */}
        <Container>
          <div className="text-center">
            {userData ? (
              <div className="flex items-center justify-center min-h-screen">
                <Loading />
              </div>
            ) : (
              <h1 className="text-2xl font-semibold font-mono hover:text-gray-500">
                User must login to read posts
              </h1>
            )}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post}></PostCard>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
