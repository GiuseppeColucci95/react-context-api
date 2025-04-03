export default function PostCard({ post }) {

  return (
    <>
      <div className="card h-100 p-3">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </>
  );
}