import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar__item">
          <Link href="/">
            <a className="navbar__logo">NEXT.JS | BLOG</a>
          </Link>
          <Link href="/add-post">
            <a className="addpost__btn">Добавить пост</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
