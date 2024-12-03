import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config_service";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="py-2 w-full ">
      <Container>
        <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 2xl:w-64 w-1/4">
            <PostCard {...post} />
          </div>
        ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
