// pages/about.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <h2 className="text-4xl font-futuristic my-8">About Me</h2>
      <p className="mb-4">
        I have been working on AI, machine learning, full-stack web development, and data engineering for years. Explore my journey through an interactive timeline and 3D visuals.
      </p>
      {/* Consider integrating a 3D avatar or timeline component here */}
    </Layout>
  );
};

export default About;
