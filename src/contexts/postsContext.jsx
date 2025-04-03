import { createContext, useContext, useEffect, useState } from "react";
import { useAlertContext } from "./alertContext";

const PostsContext = createContext();

function PostsProvider({ children }) {

  const [posts, setPosts] = useState([]);
  const { setAlertData } = useAlertContext();

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
      <PostsContext.Provider value={{ posts, setPosts }}>
        {children}
      </PostsContext.Provider>
    </>
  );
}

function usePosts() {
  const context = useContext(PostsContext);
  return context;
}

export { PostsProvider, usePosts };

