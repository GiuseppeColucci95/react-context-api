import { useEffect, useState } from "react";
import PostPage from "./components/PostPage";
import PostsContext from "./contexts/postsContext";

import { useAlertContext } from "./contexts/alertContext";
import { AlertProvider } from "./contexts/alertContext";

export default function App() {

  const [posts, setPosts] = useState([]);
  const { alertData, setAlertData } = useAlertContext();

  useEffect(() => {

    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
      .catch(err => {
        setAlertData({
          type: 'error',
          message: err.message
        });
      });
  }, []);

  return (
    <>
      <AlertProvider>
        <PostsContext.Provider value={{ posts: posts }}>
          <PostPage></PostPage>
        </PostsContext.Provider>
      </AlertProvider>
    </>
  )
}