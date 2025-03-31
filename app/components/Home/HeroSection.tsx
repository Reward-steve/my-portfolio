import logo from "@/app/image/developer-logo.png";
import Image from "next/image";
import * as m from "motion/react-client";
import { domAnimation, LazyMotion } from "motion/react";
import Description from "../Home/Description";

export default function HeroSection() {
  return (
    <>
      <main className="w-full flex-wrap flex justify-between h-auto items-center overflow-hidden relative">
        <LazyMotion features={domAnimation}>
          {/* Animated Text Description */}
          <m.div
            className="w-[500px] flex items-center justify-center h-auto flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Description />
          </m.div>

          {/* Animated Logo Section with Effects */}
          <section className="w-[500px] flex justify-center items-center h-130 relative">
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="w-110 h-full flex justify-center items-center relative"
            >
              <Image
                src={logo}
                alt="logo"
                priority
                style={{ filter: "brightness(.8)" }}
                className="rounded-xl w-full h-full shadow-xl transition-transform duration-300"
              />
            </m.div>

            {/* Floating Glow Effect */}
            <m.div
              animate={{ y: [0, -90, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute bg-cyan-400 blur-2xl right-0 w-40 h-40 opacity-20"
            />
          </section>
        </LazyMotion>
      </main>
    </>
  );
}
