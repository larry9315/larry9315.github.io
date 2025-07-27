"use client";

import React from "react";

const experiences = [
  {
    title: "Gameplay/UI Programmer – Piranha Games",
    date: "Sept 2021 – Aug 2024",
    description: (
      <>
        Gameplay and UI Programmer with 3 years of experience building and
        optimizing gameplay systems and user interfaces in Unreal Engine 5 using
        C++. Contributed to <strong>MechWarrior 5: Mercenaries</strong> and{" "}
        <strong>MechWarrior 5: Clans</strong>, focusing on core gameplay
        features, scalable UI design, and performance tuning—helping both titles
        reach Steam’s top 10 seller list.
        <br />
        <br />
        Specialized in memory management, widget pooling, and UI optimization
        using Invalidation Boxes and Retainer Boxes. Collaborated closely with
        design and QA teams to deliver polished, responsive, and
        production-ready features.
        <br />
        <br />
        Also developed a modular character selection system in C+, incorporating
        dynamic filtering, lock states, animation handling, and reusable widget
        components using efficient memory-safe design patterns.
      </>
    ),
    tech: ["C++", "Unreal Engine 4/5", "Slate/UMG", "Blueprints"],
  },
];

export default function ExperiencePage() {
  return (
    <section className="h-screen overflow-hidden px-4 md:px-24 bg-white text-black flex flex-col">
      {/* Header */}
      <div className="pt-15 pb-15">
        <h2 className="text-4xl font-bold text-center">Experience</h2>
      </div>

      {/* Centered Card */}
      <div className="flex items-center justify-center">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="max-w-4xl rounded-xl p-6 md:p-8 bg-white border border-gray-300 transition-all duration-300"
            style={{
              boxShadow:
                "0 0px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="flex mb-4">
              <img
                src="/piranhaLogo.png"
                alt="Piranha Games Logo"
                className="h-24 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{exp.date}</p>
            <p className="text-gray-800 mb-6 whitespace-pre-line text-lg leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 border-2 border-green-600 text-green-800 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
