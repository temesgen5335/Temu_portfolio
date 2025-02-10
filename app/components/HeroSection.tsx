// components/HeroSection.tsx
import ThreeDScene from "./ThreeDScene";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between my-8">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-5xl font-futuristic mb-4">
          Building Intelligent Systems for a Smarter Future
        </h1>
        <p className="text-lg">
          I’m an AI engineer and full-stack developer crafting innovative solutions that blend art and technology.
        </p>
      </div>
      <div className="w-full md:w-1/2 h-80 md:h-[500px]">
        <ThreeDScene />
      </div>
    </section>
  );
}
