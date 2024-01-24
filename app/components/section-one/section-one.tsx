"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { BKGVideo } from "./background-video";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useAutoScroll } from "@/app/utility-hooks/auto-scroll-hoook";

export const SectionOne: React.FC = () => {
  return (
    <div
      id="section-one-cont-425329842"
      className=" h-[70vh] lg:h-[100vh] w-full relative text-wrap flex flex-col items-center justify-between gap-y-1"
    >
      {/* <div id="vertical-spacer-2y9036" className="flex-none h-[2j0px] w-full"></div> */}
      <div
        id="blurred-card-container-4245432"
        className="z-30 mt-[25%] lg:mt-[8%] relative w-full flex justify-center items-start"
      >
        <div className="flex-none w-full flex jc ic">
          <div
            id="blurred-card-clr-425329842"
            className="relative w-[90%] lg:w-[60%] flex jc ic"
          >
            <BlurredCard />
          </div>
        </div>
      </div>
      <div id="scroll-down-arrow-clr-8644532" className="flex-none z-30 relative m-[10px] ">
        <ScrollDownArrow />
      </div>
      {/* absolutes */}
      <div
        id="body-bkg-video-29458548"
        className="z-10 absolute inset-0 bg-cover bg-center overflow-hidden"
      >
        <BKGVideo src="/overwatch_action.mp4" />
      </div>
      <div
        id="body-bkg-bottom-fade-into-blue-29458548"
        className="z-20 absolute inset-x-0 bottom-0 h-[30%] bg-cover bg-center overflow-hidden bg-gradient-to-b from-transparent to-[rgba(0,0,40,1)]"
      ></div>
      <div
        id="body-bkg-top-fade-into-blue-29765972"
        className="z-20 absolute inset-x-0 top-0 h-[30%] bg-cover bg-center bg-gradient-to-b from-[rgba(0,0,40,1)] to-transparent"
      ></div>
    </div>
  );
};

const ScrollDownArrow = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const handleScroll = () => {
    // Calculate 20vh from the current scroll position
    window.scrollTo({
      top: window.innerHeight * (isMobile ? 0.65 : 0.9),
      behavior: "smooth",
    });
  };
  return (
    <div
      id="scroll-down-arrow-container"
      className="cursor-pointer"
      onClick={handleScroll}
    >
      <motion.p
        animate={{ y: [0, 20, 0] }} // Moves down 15px and back up
        transition={{
          duration: 1.5, // Duration of one cycle
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        id="scroll-down-g97yrwv"
        className="material-symbols-outlined text-white text-xl lg:text-4xl"
      >
        expand_more
      </motion.p>
    </div>
  );
};

export const BlurredCard: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const TitleBox = () => {
    return (
      <div
        id="blurred-card"
        className="w-full flex flex-col items-center justify-between"
      >
        <div id="sk-logo" className="flex-none">
          <Image
            className="relative"
            src="/sk-logo.png"
            alt="Next.js Logo"
            width={isMobile ? 200 : 360}
            height={100}
            priority
          />
        </div>
        <div id="vertical-spacer" className="flex-none h-[10px]"></div>
        <div id="put-ip-or-shut-up-image" className="flex-none">
          <Image
            className="relative "
            src="/put-up-shut-up.png"
            alt="Next.js Logo"
            width={isMobile ? 240 : 360}
            height={37}
            priority
          />
        </div>
        <div id="vertical-spacer" className="flex-none h-[20px]"></div>
        {/* <div id="game-cards-carousel" className="flex-none">
          <TitleBox />
        </div> */}
        <div id="vertical-spacer" className="flex-none h-[20px]"></div>
        {/* <button
          id="battle-now-button"
          className="flex-none rounded-[5px] border border-gray-500 text-lg uppercase p-2 text-gray-300 bg-cyan-700 bg-opacity-20 bg-gradient-to-r from-gray-800 to-gray-900"
        >
          BATTLE NOW
        </button> */}
      </div>
    );
  };
  return (
    <div
      id="blurred-card"
      className="h-full max-h-[80vh] max-w-[80%] relative rounded-[15px] p-[5%] cust-blurred-card flex flex-col lg:flex-row items-center justify-start lg:justify-between"
    >
      <div id="title-section-clr-927645808" className="flex-none">
        <TitleBox />
      </div>
      {/* <div
        id="separator-24935672"
        className="flex-none w-full h-[2px] lg:w-[2px] lg:h-full bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-white to-transparent"
      ></div> */}
      {/* <div id="yak-carousel-clr-927645808" className="flex-none max-w-[400px] px-4 relative bg-gradient-to-b from-transparent via-blue-900/50 to-transparent">
        <YakCarousel />
      </div> */}

      {/* <p
        id="hero-text-9vbyrw"
        className="p-2 text-xl lg:text-4xl text-white font-lato font-bold tracking-widest leading-loose text-wrap"
      >
        monetize your game time
      </p> */}
    </div>
  );
};

export const YakCarousel: React.FC = () => {
  const { scrollContainerRef } = useAutoScroll({
    scrollInterval: 1200,
    totalItems: 8,
    scrollDistance: 150,
    scrollDirection: "horizontal",
  });

  return (
    <motion.div
      ref={scrollContainerRef}
      // animate={controls}
      id="game-cards-carousel-cont"
      className="relative flex items-center justify-start gap-x-[20px] overflow-x-auto whitespace-nowrap p-2"
    >
      <div id="game-cards-clr-4308462" className="flex-none">
        <ZebraCard imagesrc="/gc-1-csgo.png" />
      </div>
      <div id="game-cards-clr-4308462" className="flex-none">
        <ZebraCard imagesrc="/gc-2-rainbow.png" />
      </div>
      <div id="game-cards-clr-4308462" className="flex-none">
        <ZebraCard imagesrc="/gc-3-valorant.png" />
      </div>
      <div id="game-cards-clr-4308462" className="flex-none">
        <ZebraCard imagesrc="/gc-4-tarkove.png" />
      </div>
      {/* duplicate set */}
      <div id="game-cards-clr-4308462" className="flex-none">
        <ZebraCard imagesrc="/gc-1-csgo.png" />
      </div>
      <div id="game-cards-clr-4308462" className="flex-none">
        <ZebraCard imagesrc="/gc-2-rainbow.png" />
      </div>
      <div id="game-cards-clr-4308462" className="flex-none">
        <ZebraCard imagesrc="/gc-3-valorant.png" />
      </div>
      <div id="game-cards-clr-4308462" className="flex-none">
        <ZebraCard imagesrc="/gc-4-tarkove.png" />
      </div>
    </motion.div>
  );
};

export const ZebraCard: React.FC<{ imagesrc: string }> = ({ imagesrc }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div
      id="zebra-card-cont"
      className="inline-block w-[120px] lg:w-[180px] py-10 rounded-[5px] hover:scale-150 transition duration-200 ease-in"
    >
      <div id="image" className="">
        <Image
          src={imagesrc}
          alt="Logo"
          layout="responsive"
          width={100}
          height={200}
          priority
        />
      </div>
    </div>
  );
};
