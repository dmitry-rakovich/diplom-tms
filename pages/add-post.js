import Image from "next/image";
import Form from "../components/form";
import Link from "next/link";
import { NavigationLayout } from "../components/NavigationLayout";

export default function AddPost() {
  return (
    <NavigationLayout title={'Add Post'}>
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
    </NavigationLayout>
  );
}
