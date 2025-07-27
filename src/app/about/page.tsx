"use client";

export default function AboutPage() {
  return (
    <section className="min-h-screen px-8 md:px-24 py-16 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <h1 className="text-5xl font-bold text-center md:text-left">
          About Me
        </h1>

        <p className="text-lg leading-relaxed">
          I'm a software engineer with over 3 years of experience specializing
          in C++ and Unreal Engine 5. I've contributed to high-profile titles
          like <strong>MechWarrior 5: Mercenaries</strong> and
          <strong> MechWarrior 5: Clans</strong>, where I developed core
          gameplay systems, optimized UI/UX flows, and collaborated closely with
          designers and QA to bring immersive features to life.
        </p>

        <p className="text-lg leading-relaxed">
          Beyond game development, I'm passionate about creating tools,
          interfaces, and systems that enhance user experiences and performance.
          Whether it's building responsive UI in Unreal, implementing smart
          gameplay mechanics, or contributing to polished front-end interfaces
          in full-stack apps, I love solving complex problems through code.
        </p>

        <p className="text-lg leading-relaxed">
          Currently, I'm transitioning and expanding my expertise into
          full-stack development and AI-powered applications. I thrive in
          collaborative environments and am always eager to learn, adapt, and
          ship meaningful products, bringing deep experience in front-end UX
          principles, interactive UI design, and a passion for building robust,
          user-centered web applications using modern technologies like
          TypeScript, Next.js, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
