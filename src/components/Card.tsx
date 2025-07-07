import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        `
    relative z-0 overflow-hidden rounded-3xl bg-gray-800 
    
    after:absolute after:inset-0 after:rounded-3xl after:content-['']
    after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20
    after:pointer-events-none after:z-10 
    `,
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

// bg-gray-800 rounded-3xl relative
//               z-0 overflow-hidden after:z-10

//               after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:-outline-offset-2 after:rounded-3xl after:outline-white/20
