import Link from "next/link";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Post() {

  const dispatch = useDispatch()
  
  const posts = useSelector(state => state.posts.posts)
  
  useEffect(() => {
    dispatch(fetchPosts())
  },[dispatch])
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

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function () {
    const res = await fetch(`http://localhost:5000/api/post`)
    const data = res.json()
    return data
  }
)