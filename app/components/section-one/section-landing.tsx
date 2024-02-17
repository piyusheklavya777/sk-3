"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { BKGVideo } from "./background-video";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useAutoScroll } from "@/app/utility-hooks/auto-scroll-hoook";
import Typewriter from "typewriter-effect";

export const SectionLanding: React.FC = () => {
  return (
    <div
      id="section-one-cont-425329842"
      className=" h-[70vh] lg:h-[100vh] w-full relative text-wrap flex flex-col jc lg:justify-start ic"
    >
      <div
        id="blurred-card-container-4245432"
        className="z-30 mt-[25%] lg:mt-[8%] relative w-full flex jc is"
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
      <div
        id="vertical-spacer-2y9036"
        className="flex-none h-[5%] w-full"
      ></div>
      <div
        id="description-text-ht8u3inw"
        className="flex-none relative z-30 mx-[10%] lg:mx-[5%]"
      >
        <p
          id="description-text-3turinpow"
          className="text-[#e5e3ff] text-xl lg:text-4xl font-thin font-lato text-center lg:scale-y-[105%] lg:tracking-wide"
        >
          <span className="hidden">Y</span>
          <Typewriter
            options={{
              //   autoStart: true,
              delay: 18,
              deleteSpeed: 50,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Convert your game time from your favourite games into redeemable rewards.`
                )

                .start();
            }}
          />
        </p>
      </div>

      {/* absolutes */}
      <div
        id="scroll-down-arrow-clr-8644532"
        className="absolute z-40 inset-x-0 bottom-[8%] flex ic jc"
      >
        <ScrollDownArrow />
      </div>
      <div
        id="body-bkg-video-29458548"
        className="z-10 absolute inset-0 bg-cover bg-center overflow-hidden"
      >
        <BKGVideo src="https://storage.googleapis.com/sk-3-public/overwatch_action.mp4" />
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
  const handleScroll = () => {
    const element = document.getElementById("join-closed-beta-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
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
        id="blurred-card-bopuovpwn48u"
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
        <div id="sk-subtitile-2-image" className="flex-none">
          <Image
            className="relative "
            src="/sk-subtitle-2.png"
            alt=""
            width={isMobile ? 240 : 360}
            height={37}
            priority
          />
        </div>
        {/* <div id="put-ip-or-shut-up-image" className="flex-none">
          <Image
            className="relative "
            src="/put-up-shut-up.png"
            alt="Next.js Logo"
            width={isMobile ? 240 : 360}
            height={37}
            priority
          />
        </div> */}
        {/* <div id="vertical-spacer" className="flex-none h-[20px]"></div> */}
        {/* <div id="game-cards-carousel" className="flex-none">
          <TitleBox />
        </div> */}
        {/* <div id="vertical-spacer" className="flex-none h-[20px]"></div> */}
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
      id="blurred-card-hupg0wre"
      className="h-full max-h-[80vh] max-w-[80%] relative rounded-[15px] p-[5%] cust-blurred-card flex flex-col items-center justify-start lg:justify-between"
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
        className="p-2 text-xl lg:text-4xl text-white font-lato font-bold tracking-wide text-wrap"
      >
        Convert your game time from your favourite games into redeemable
        rewards.
      </p> */}
    </div>
  );
};
