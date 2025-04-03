import { useEffect, useState } from "react";
import PostPage from "./components/PostPage";
import PostsContext from "./contexts/postsContext";

export default function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      <PostsContext.Provider value={{ posts: posts }}>
        <PostPage></PostPage>
      </PostsContext.Provider>
    </>
  )
}