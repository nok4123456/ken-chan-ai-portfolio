// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#1e2540] p-4">
      <div className="container mx-auto">
        <Link href="/" className="text-white px-3">
          Home
        </Link>
        <Link href="/about" className="text-white px-3">
          About
        </Link>
        <Link href="/projects" className="text-white px-3">
          Projects
        </Link>
        <Link href="/chat" className="text-white px-3">
          Talk to me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
