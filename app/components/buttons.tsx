import * as m from "motion/react-client";
import Link from "next/link";

export default function Button({ text, path }: { text: string; path: string }) {
  return (
    <m.a
      whileHover={{ cursor: "pointer" }}
      href={`${path}`}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-lg border hover:text-cyan-700 dark:border-cyan-900 border-cyan-600 p-1 text-cyan-600 shadow-lg dark:hover:text-cyan-400 hover:border hover:border-cyan-400 cursor-pointer transition duration-300 easeInOut"
    >
      {text}
    </m.a>
  );
}
