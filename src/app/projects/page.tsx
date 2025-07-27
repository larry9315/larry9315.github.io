"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    title: "Hero Selection Menu System",
    description:
      "Developed a modular character selection screen entirely in C++ using Unreal Engine 5, featuring dynamic filtering, lock state logic, and animation transitions. Emphasized performance and memory safety by implementing efficient widget creation and reuse patterns.",
    tech: ["C++", "Unreal Engine"],
    links: {
      link: "#",
      demo: "#",
      source: "#",
    },
  },
  {
    title: "Playlist Automator",
    description:
      "A web application that automates porting Spotify playlists to YouTube Music playlists. It uses Spotify and YouTube APIs to authenticate users and transfer songs.",
    tech: ["C++", "Drogon", "JavaScript", "React", "Docker"],
    links: {
      link: "#",
      demo: "#",
      source: "#",
    },
  },
  {
    title: "Pathfinding Algorithm",
    description:
      "Implemented breadth first search and A* search algorithm from scratch using C++. Used Queue, map and 2d array for data structure with dynamic memory allocation with pointers to solve the problem.",
    tech: ["C++"],
    links: {
      link: "#",
      demo: "#",
      source: "#",
    },
  },
];

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  return (
    <section className="h-screen overflow-hidden relative px-4 md:px-24 bg-white text-black flex flex-col">
      {/* Header */}
      <div className="pt-15 pb-15">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
      </div>

      {/* Project Card Centered */}
      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-xl p-6 md:p-8 bg-white border border-gray-300 transition-all duration-300 max-w-3xl"
            style={{
              boxShadow:
                "0 0px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
            <p className="text-gray-800 mb-4 text-lg">
              {currentProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {currentProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 border-2 border-green-600 text-green-800 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={currentProject.links.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Link
              </a>
              <a
                href={currentProject.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Live Demo
              </a>
              <a
                href={currentProject.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page Selector */}
      <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 flex gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-200 ${
              idx === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
