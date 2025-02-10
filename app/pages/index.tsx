// pages/index.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      {/* Add more sections or interactive demos as needed */}
    </Layout>
  );
};

export default Home;
