"use client";
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import myImage from "@/assets/images/IMG_20241024_065847_232.jpg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

// Hero page
export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-32 lg:py-32 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0  pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="size-[620px] hero-ring  "></div>
        <div className="size-[820px] hero-ring  "></div>
        <div className="size-[1020px] hero-ring  "></div>
        <div className="size-[1220px] hero-ring  "></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={myImage}
            className="size-32 rounded-full md:size-64 "
            alt="Person peeking behind laptop"
          />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>

            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div
          className="max-w-lg mx-auto
        "
        >
          <h1 className="font-serif text-3xl  md:text-5xl  text-center mt-8 tracking-wide">
            Hey 👋 I’m Ayalkbet , a Full Stack Developer
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in crafting pixel-perfect, fluid, and responsive web
            applications. I bring designs to life with smooth animations, clean
            and well-structured front-end architecture, and robust back-end APIs
            that just work. Whether it&apos;s building from scratch or scaling
            existing systems, I focus on code quality, performance, and user
            experience.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-4 h-12 rounded-xl">
            <a
              href="https://docs.google.com/document/d/1HH47IMkWDWWv71rh774SAIkKgtKTb_bme6XnOTNhVz4/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold">My Resume</span>
            </a>
            <ArrowDown className="size-4" />
          </button>

          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <FaGithub className="size-6" />
            <a
              href="https://github.com/mr-Ayalk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold">My Github</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
