import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/logo-color-removebg-preview.png"
          height={120}
          width={120}
        />
      </div>
      <Link href="/">Home</Link> <Link href="/about">About</Link>{" "}
      <Link href="/niggas">Niggas Listing</Link>
    </nav>
  );
};

export default Navbar;
