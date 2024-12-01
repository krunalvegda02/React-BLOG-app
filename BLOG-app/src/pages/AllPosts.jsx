import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config_service";
import { PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState();
  useEffect(() => {}, []);

  appwriteService.getPosts([].then((posts) => setPosts(posts)));
  return <div className="py-8 w-full"> 
  <Container>
    {posts.map((post)=> {
        <PostCard key={post.$id} post={post} />
            })}
  </Container>
  </div>;
}

export default AllPosts;
