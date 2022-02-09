import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Form() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const router = useRouter();
  const addPost = async () => {
    try {
      await axios
        .post("http://localhost:5000/api/post/add", {
          title,
          text,
          imgUrl,
        })
        .then(() => router.push("/"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <div className="input_field">
          <div className="label">Название статьи:</div>
          <input onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div className="input_field">
          <div className="label">Текст статьи:</div>
          <textarea onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <div className="input_field">
          <div className="label">URL картинки:</div>
          <input onChange={(e) => setImgUrl(e.target.value)}></input>
        </div>
        <button onClick={addPost} className="btn_addpost">
          Добавить
        </button>
      </form>
    </div>
  );
}
