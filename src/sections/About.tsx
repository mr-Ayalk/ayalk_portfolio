"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import myImage from "@/assets/images/IMG_20241024_065847_232.jpg";
import virtualass from "@/assets/images/virtualass.png";
const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emaoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emaoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emaoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emaoji: "🎮",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    emaoji: "🎶",
    left: "70%",
    top: "40%",
  },
  {
    title: "Fitness",
    emaoji: "🤾‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emaoji: "📖",
    left: "45%",
    top: "70%",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am,what I do,"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5  lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Besides Coding"
                description="I am also a certified vertual assistant besides the cooding"
              />

              <div className="w-64  h-96 mx-auto mt-2 md:mt-0">
                <Image
                  src={virtualass}
                  alt="Book cover"
                  className="size-auto"
                />
              </div>
            </Card>

            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="   Explore the technologies and tools I used to create digital
                experiance"
                className=""
              />

              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:15s] "
              />
            </Card>
          </div>

          <div className="grid grid-cols-1  gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore the interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />

              <div className="relative flex-1 " ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from bg-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emaoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full   after:content-[''] after:absolute after:inset-0 after:outline-0 after:outline after-outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30   ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from bg-emerald-300 to-sky-400 -z-20 animate-ping [animate-duration:2s] "></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from bg-emerald-300 to-sky-400 -z-10 "></div>
                <Image
                  src={myImage}
                  alt="smiling imoji"
                  className="size-20 rounded-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
