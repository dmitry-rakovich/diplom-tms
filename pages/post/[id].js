import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { NavigationLayout } from "../../components/NavigationLayout";

export default function Post({ post }) {
  const router = useRouter();
  const removePost = async () => {
    await axios
      .post("http://localhost:5000/api/post/remove", { postId: post._id })
      .then(() => {
        router.push("/");
      });
  };
  return (
    <NavigationLayout title={post.title}>
        <Link href="/">
          <a className="btn_back">
            <Image
              src="/Vector.svg"
              alt="Picture of the author"
              width={24}
              height={15}
            />
            Назад
          </a>
        </Link>
        <div className="container">
          <div className="post_wrapper">
            <div className="post_item">
              <h1 className="post_title">{post.title}</h1>
              <p className="post_text">{post.text}</p>
            </div>
            <div className="post_item">
              <img
                className="post_img"
                src={post.imgUrl}
                width={540}
                height={316}
                alt="No image"
              ></img>
            </div>
            <a onClick={removePost} className="removepost__btn">
              Удалить пост
            </a>
          </div>
        </div>
    </NavigationLayout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:5000/api/post/${context.query.id}`);
  const post = await res.json();
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post }, // will be passed to the page component as props
  };
}
