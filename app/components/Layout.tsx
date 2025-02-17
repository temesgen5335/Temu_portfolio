"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeContextProvider } from "./utils/ThemeContext"; // Import your ThemeContext
import Navbar from "./layout/Navbar"; 
import "../globals.css"; // Import Tailwind styles

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeContextProvider>
      <div className="bg-white text-black dark:bg-darkBg dark:text-white min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
      </div>
    </ThemeContextProvider>
  );
}



// // components/Layout.tsx Old code
// import { ReactNode } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// interface LayoutProps {
//   children: ReactNode;
// }

// export default function Layout({ children }: LayoutProps) {
//   return (
//     <div className="bg-darkBg text-white min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow container mx-auto p-4">{children}</main>
//       <Footer />
//     </div>
//   );
// }
