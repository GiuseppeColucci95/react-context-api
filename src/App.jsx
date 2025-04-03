import { useEffect, useState } from "react";
import PostPage from "./components/PostPage";

import { AlertProvider } from "./contexts/alertContext";
import { PostsProvider } from "./contexts/postsContext";

export default function App() {

  return (
    <>
      <AlertProvider>
        <PostsProvider>
          <PostPage></PostPage>
        </PostsProvider>
      </AlertProvider>
    </>
  )
}