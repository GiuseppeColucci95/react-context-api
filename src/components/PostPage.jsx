import { useContext, useState, useEffect } from "react";

import PostList from "./PostList";
import Alert from './Alert';

import { useAlertContext } from "../contexts/alertContext";


export default function PostPage() {

  const [posts, setPosts] = useState([]);
  const { setAlertData } = useAlertContext();


  useEffect(() => {

    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
      .catch(err => {
        console.log(err);

        setAlertData({
          type: 'error',
          message: err.message
        });
      });
  }, []);

  return (
    <>
      <div className="container my-5">

        <h1 className="text-center">React Context API</h1>

        <Alert></Alert>
        <PostList></PostList>
      </div>
    </>
  );
}