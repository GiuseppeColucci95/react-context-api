import { useEffect, useState } from "react"

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

        <h1 className="text-center">React Context API</h1>

        <div className="row mt-5">

          {
            posts.map(post => (
              <div className="col">
                <div className="card h-100">
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}