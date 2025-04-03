import { useEffect, useState } from "react";
import PostPage from "./components/PostPage";

export default function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setPosts(data);
      });
  }, []);


  return (
    <>
      <div className="container my-5">

        <PostPage></PostPage>
      </div>
    </>
  )
}