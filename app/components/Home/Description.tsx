"use client";
import * as m from "motion/react-client";
import Button from "../buttons";
import { useEffect, useState } from "react";
import { how_to_reach_me } from "../../api/data/data";
import Link from "next/link";

export default function Discription() {
  const text =
    "A Front-End Developer passionate about building responsive modern web applications.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [index, text]);

  return (
    <section className="w-full h-150 max-[375]:h-120 flex flex-col gap-10 relative items-start justify-center max-[375]:items-center max-[375]:text-center max-[375]:justify-evenly max-[375]:gap-0">
      <m.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-white text-2xl"
      >
        Hello 👋, I'm
      </m.p>
      <m.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-6xl max-[375]:text-3xl font-bold text-cyan-400"
      >
        Reward Stephen.
      </m.h1>
      <m.p
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-2 w-3/4 max-[375]:w-full"
      >
        {displayedText}
        {index < text.length && <span className="animate-bounce">|</span>}
      </m.p>
      <Button path="/Project" text="Check out my projects" />
      <m.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="rounded-full flex-wrap my-10 flex justify-between items-center gap-5 max-[375]:my-0 max-[375]:gap-3"
      >
        {how_to_reach_me.map(({ Icon, href, link_name }, i) => (
          <Link
            href={href}
            key={i}
            title={link_name}
            className={`border w-12 h-12 text-cyan-600 rounded-full flex cursor-pointer items-center justify-center hover:text-cyan-400 transition duration-300`}
          >
            {<Icon size={20} />}
          </Link>
        ))}
      </m.div>
    </section>
  );
}
