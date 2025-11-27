"use client";

import { projects } from "@/lib/constant";
import Image from "next/image";

export function ProjectsScroll() {
  return (
    <div className="flex items-center gap-5 py-5 overflow-hidden rounded-md">
      <div className="flex animate-infinite-scroll [--animation-delay:60s] gap-10 rounded-md">
        {projects.map((data, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer"
            style={{ animationDelay: `${(index + 1) * 4}s` }}
          >
            <div className="min-w-[50rem] overflow-hidden bg-gradient-to-tr from-black to-black/30 h-[60rem] rounded-2xl">
              <Image
                src={data.img}
                alt={data.name}
                width={1000}
                height={1000}
                priority
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}

        {projects.map((data, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer"
            style={{ animationDelay: `${(index + 1) * 4}s` }}
          >
            <div className="min-w-[50rem] overflow-hidden bg-gradient-to-tr from-black to-black/30 h-[60rem] rounded-2xl">
              <Image
                src={data.img}
                alt={data.name}
                width={1000}
                height={1000}
                priority
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
