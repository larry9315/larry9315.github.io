"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-8 md:px-24 py-8 gap-16 text-center md:text-left">
      <div className="max-w-2xl flex flex-col gap-6 pb-25">
        <h1 className="flex items-center gap-4">
          <span className="text-4xl text-black font-bold">&gt;</span>
          <span
            className="font-bold text-black inline-block overflow-hidden whitespace-nowrap"
            style={{
              fontSize: "80px",
              lineHeight: "1.2",
              minWidth: "460px",
            }}
          >
            <Typewriter
              words={["Larry Park"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p
          className="text-gray-700 leading-relaxed"
          style={{
            fontSize: "25px",
            lineHeight: "1.2",
          }}
        >
          An aspiring programmer <br /> who wants to do more.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-lg shrink-0">
        <Image
          src="/larrypark.jpg"
          alt="Larry Park"
          width={400}
          height={500}
          className="object-cover"
        />
      </div>
    </section>
  );
}
