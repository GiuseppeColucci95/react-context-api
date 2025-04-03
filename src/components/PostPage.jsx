import { useContext, useState, useEffect } from "react";

import PostList from "./PostList";
import Alert from './Alert';



export default function PostPage() {

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