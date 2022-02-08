import Link from "next/link";

export default function Post({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <Link href={"/post/[id]"} as={`/post/${post._id}/`} key={post._id}>
            <a
              className="wrapper_post"
              style={{ background: ` repeat round url(${post.imgUrl})` }}
            >
              <div className="wrapper_post_title">{post.title}</div>
            </a>
          </Link>
        );
      })}
    </>
  );
}
