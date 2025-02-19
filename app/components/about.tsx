// pages/about.tsx
import type { NextPage } from "next";
import Layout from "../layout";
import { FaDownload } from "react-icons/fa";

const About: NextPage = () => {
  return (
    <Layout>
      <section className="hero-section text-center py-16 bg-dark text-neon-blue">
        <h1 className="text-5xl font-bold mb-4">Temesgen G</h1>
        <p className="text-2xl">AI Engineer & Full-Stack Developer</p>
        <p className="text-xl mt-4">"Innovating the future with AI and technology"</p>

      </section>

      <section className="bio-section py-16 px-8 bg-dark text-white">
        <h2 className="text-4xl font-futuristic my-8">About Me</h2>
        <p className="mb-4">
          I have been working on AI, machine learning, full-stack web development, and data engineering for years. Explore my journey through an interactive timeline and 3D visuals.
        </p>
        {/* Consider integrating a 3D avatar or timeline component here */}
      </section>

      <section className="skills-section py-16 px-8 bg-dark text-white">
        <h2 className="text-4xl font-futuristic my-8">Skills & Expertise</h2>
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add skill icons and progress bars here */}
        </div>
      </section>

      <section className="experience-section py-16 px-8 bg-dark text-white">
        <h2 className="text-4xl font-futuristic my-8">Experience & Education</h2>
        <div className="timeline">
          {/* Add timeline or grid layout for education, certifications, and work experience */}
        </div>
      </section>

      <div className="text-center py-8">
        <a href="/resume.pdf" className="btn-download-resume inline-flex items-center px-4 py-2 bg-neon-blue text-dark rounded hover:bg-neon-blue-dark">
          <FaDownload className="mr-2" /> Download Resume
        </a>
      </div>
    </Layout>
  );
};

export default About;
