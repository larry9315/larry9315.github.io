"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 bg-white border-b border-gray-300 shadow-[0_4px_12px_rgba(0,0,0,0.2)] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-700">
          Larry Park
        </Link>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="hover:text-blue-600 transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
