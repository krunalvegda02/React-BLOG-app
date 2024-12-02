import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config_service";
import { Container, PostCard } from "../components";


function Home() {

  const [posts, setPosts] = useState([]); // Initialize posts as an empty array
  
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents || []); // Ensure documents is always an array
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to Read posts
              </h1>
            </div>
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