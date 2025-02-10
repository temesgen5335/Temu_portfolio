// components/Layout.tsx
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-darkBg text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}
