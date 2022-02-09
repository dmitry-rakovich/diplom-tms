import Post from "./Post";

export default function Wrapper({ posts }) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="wrapper_posts">
          <Post />
        </div>
      </div>
    </div>
  );
}
