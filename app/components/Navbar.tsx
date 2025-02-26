// components/Navbar.tsx
"use client";

import Link from "next/link";

import DarkModeToggle from "./DarkModeToggle";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="text-2xl font-futuristic">
        Temesgen<span className="text-neonCyan">.AI</span>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>

        <DarkModeToggle />
      </div>
    </nav>
  );
}
