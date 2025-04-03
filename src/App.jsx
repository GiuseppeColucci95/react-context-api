import { useEffect, useState } from "react";
import PostPage from "./components/PostPage";
import PostsContext from "./contexts/postsContext";

import { AlertProvider } from "./contexts/alertContext";

export default function App() {

  return (
    <>
      <AlertProvider>
        <PostPage></PostPage>
      </AlertProvider>
    </>
  )
}