import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-slate-400 p-3 ">
      <div className="logo"> LOGO</div>
      <nav>
        <menu className="flex items-center gap-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Log In</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
