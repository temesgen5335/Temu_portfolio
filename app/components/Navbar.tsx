// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="text-2xl font-futuristic">
        Temesgen<span className="text-neonCyan">.AI</span>
      </div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
