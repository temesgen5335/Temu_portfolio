"use client";

import Image from "next/image";
import Layout from "./components/Layout";
import HeroSection from "./components/home/HeroSection";
import { ThemeContextProvider } from "./components/utils/ThemeContext"; // Import the context provider
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer";


export default function Home() {
  return (
    <ThemeContextProvider>

    <Layout>
      <HeroSection />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                app/page.tsx
              </code>
              .
            </li>
            <li>SAVE the trees dave the cat save the PLANET.</li>
          </ol>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Next.js with TEMU
            </a>
          </div>
        </main>
      </div>
    </Layout>
    </ThemeContextProvider>
  );
}