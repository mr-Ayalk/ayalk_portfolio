"use client";
import React from "react";
import { toast } from "react-hot-toast";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl  text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10 "
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life ? Let&apos;s connect
                and discuss how Ican help you achieve your goals
              </p>
            </div>
            <div className="">
              {/* <button
                onClick={() =>
                  (window.location.href =
                    "mailto:ayalkteketel7@gmail.com?cc=ayalkteketel7@gmail.com&bcc=ayalkteketel7@gmail.com&subject=Get in touch")
                }
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 "
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button> */}

              <button
                onClick={() => {
                  const mailtoLink =
                    "mailto:ayalkteketel7@gmail.com?cc=ayalkteketel7@gmail.com&bcc=ayalkteketel7@gmail.com&subject=Get in touch";

                  console.log("Contact button clicked");
                  console.log("Mailto link:", mailtoLink);

                  // Attempt to open mail client
                  window.location.href = mailtoLink;

                  // Fallback alert if mail client doesn't open
                  setTimeout(() => {
                    toast.error(
                      "Could not open your email app. Please email me manually at ayalkteketel7@gmail.com."
                    );
                  }, 500);
                }}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
