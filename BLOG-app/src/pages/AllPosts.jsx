import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config_service";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import {Loading} from "../components/index";
function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  const userdata = useSelector((state) => state.auth.userData);
  const userid = userdata.userData.$id;
  // console.log(userid);
  // console.log("post", posts);
  // console.log("userid",  posts.$id);

  const allPostIdArray = posts.map((id) => id.userid);
  console.log(allPostIdArray);
  const myPostId = allPostIdArray
    .filter((id) => {
      return id == userid;
    })
    .toString();
  console.log("mypostids", myPostId);

  if (posts.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        {" "}
        {/* Center content */}
        <Container>
          <div className="text-center">
            {
              <div className="flex items-center justify-center min-h-screen">
                <Loading />
              </div>
            }
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-2 w-full ">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 2xl:w-64 w-1/4">
              {/* {myPostId == post.userid ? <PostCard {...post} /> : "" }
              {console.log(myPostId === post.userid) */}
              {<PostCard {...post} />}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
