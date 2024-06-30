"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
  }[];
}) => {
  // const [wordsPerLine, setWordsPerLine] = useState(5);

  // const updateWordsPerLine = () => {
  //   const width = window.innerWidth;
  //   if (width <= 399) {
  //     setWordsPerLine(5);
  //   } else if (width >= 400 && width <= 449) {
  //     setWordsPerLine(7);
  //   } else if (width >= 450 && width <= 499) {
  //     setWordsPerLine(8);
  //   } else if (width >= 500 && width <= 599) {
  //     setWordsPerLine(10);
  //   } else if (width >= 600 && width <= 767) {
  //     setWordsPerLine(12);
  //   } else if (width >= 768) {
  //     setWordsPerLine(15);
  //   }
  // };

  // useEffect(() => {
  //   updateWordsPerLine(); // Initial check
  //   window.addEventListener("resize", updateWordsPerLine); // Add event listener
  //   return () => window.removeEventListener("resize", updateWordsPerLine); // Clean up
  // }, []);

  const isExtraSmallMobile = useMediaQuery({ maxWidth: 399 });
  const isSmallMobile = useMediaQuery({ minWidth: 400, maxWidth: 449 });
  const isMediumMobile = useMediaQuery({ minWidth: 450, maxWidth: 499 });
  const isLargeMobile = useMediaQuery({ minWidth: 500, maxWidth: 599 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  let wordsPerLine = 5;
  if (isSmallMobile) wordsPerLine = 7;
  if (isMediumMobile) wordsPerLine = 8;
  if (isLargeMobile) wordsPerLine = 10;
  if (isTablet) wordsPerLine = 11;
  if (isDesktop) wordsPerLine = 11;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="relative group"
          key={item.title}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="mb-5">
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className=" translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black-200 z-50 shadow-xl px-4 py-2"
                >
                  <div className="font-bold text-lg text-purple relative z-30 text-base mb-2">
                    {item.title}
                  </div>
                  <div className="text-white text-sm mb-5">
                    {item.des
                      .split(" ")
                      .reduce((acc: any[], word, index) => {
                        const chunkIndex = Math.floor(index / wordsPerLine);
                        if (!acc[chunkIndex]) {
                          acc[chunkIndex] = [];
                        }
                        acc[chunkIndex].push(word);
                        return acc;
                      }, [])
                      .map((line, index) => (
                        <p key={index}>{line.join(" ")}</p>
                      ))}
                  </div>
                  <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                  <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[36rem] w-[80vw] mb-[8rem] lg:mb-4"
            key={item.id}
            // onMouseMove={handleMouseMove}
          >
            <CardContainer className="inter-var">
              <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
                  className="my-4 font-bold text-purple lg:text-2xl md:text-xl text-base line-clamp-"
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
                      target="_blank"
                      rel="noopener noreferrer"
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
        </div>
      ))}
    </>
  );
};
