import { useContext } from "react";
import PostsContext from "../contexts/postsContext";
import PostCard from "./PostCard";

export default function PostList() {

  const { posts } = useContext(PostsContext);

  console.log(posts);


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