import { useContext, useState, useEffect } from "react";
import PostCard from "./PostCard";

import { usePosts } from "../contexts/postsContext";

export default function PostList() {

  const { posts } = usePosts();

  return (
    <>
      <div className="row row-cols-3 mt-5 g-3">

        {
          posts.map(post => (
            <div key={post.id} className="col">
              <PostCard post={post}></PostCard>
            </div>
          ))
        }

      </div>
    </>
  );
}