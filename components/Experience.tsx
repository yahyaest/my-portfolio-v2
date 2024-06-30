"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/TracingBeam";
import { workExperience } from "@/data";

export default function Experience() {
  return (
    <div className="py-20 mt-32 w-full" id="experience">
      <h1 className="heading text-white my-10">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {workExperience.map((item, index) => (
            <div key={`content-${index}`} className="mb-16">
              <h1 className="bg-black-300 text-purple rounded-full text-xl font-bold w-fit px-4 py-1 mb-4">
                {item.company}
              </h1>

              {/* <p className={twMerge(calsans.className, "text-xl mb-4")}>
              {item.title}
            </p> */}

              <p className="text-xl text-purple mb-4">
                {item.title} ({item.duration})
              </p>

              <div className="text-sm text-white  prose prose-sm prose-invert">
                {item.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </div>

              <h1 className="my-3">Tools : </h1>
              <div className="flex flex-row flex-wrap">
                {item.tools.map((tool, index) => (
                  <h2
                    key={index}
                    className={`bg-purple text-black rounded-full text-sm w-fit my-2 ${
                      tool.length < 20 ? "px-2" : "px-4"
                    } py-1 mx-2`}
                  >
                    {tool}
                  </h2>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}
