"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3DCard";
import Image from "next/image";

import Link from "next/link";
import { PinContainer } from "./ui/Pin";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-white mb-16">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <AnimatedTooltip items={projects} />
      </div>
      {/* <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[36rem] w-[80vw] mb-[8rem] lg:mb-4"
            key={item.id}
          >
            <CardContainer className="inter-var">
              <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="my-4 font-bold lg:text-2xl md:text-xl text-base line-clamp-"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="flex items-center"
                  >
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="flex justify-center items-center"
                  >
                    <Link
                      href={item.link}
                      className="flex lg:text-xl md:text-xs text-sm text-purple"
                    >
                      Check Live Site
                    </Link>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default RecentProjects;
