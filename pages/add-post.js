import Navbar from "../components/Navbar";
import Image from "next/image";
import Form from "../components/form";
import Link from "next/link";

export default function AddPost() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
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
          <Form />
        </div>
      </div>
    </>
  );
}
