export default function PostList() {

  return (
    <>
      <div className="row row-cols-3 mt-5">

        {
          posts.map(post => (
            <div key={post.id} className="col">
              <div className="card h-100">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}