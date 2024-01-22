"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const SectionOne: React.FC = () => {
  return (
    <div className="pt-[5%] flex flex-col items-center justify-center gap-y-20">
      <div
        id="blurred-card-container"
        className="inline-flex items-center justify-center"
      >
        <BlurredCard />
      </div>
    </div>
  );
};

export const BlurredCard: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div
      id="blurred-card"
      className="relative rounded-[15px] py-[20px] p-[5%] cust-blurred-card flex flex-col items-center justify-between"
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
      <div id="game-cards-carousel" className="flex-none">
        <YakCarousel />
      </div>
      <div id="vertical-spacer" className="flex-none h-[20px]"></div>
      <button
        id="battle-now-button"
        className="flex-none rounded-[5px] border border-gray-500 text-lg uppercase p-2 text-gray-300 bg-cyan-700 bg-opacity-20 bg-gradient-to-r from-gray-800 to-gray-900"
      >
        BATTLE NOW
      </button>
    </div>
  );
};

export const YakCarousel: React.FC = () => {
  return (
    <div
      id="game-cards-carousel-cont"
      className="relative flex items-center justify-start gap-x-[20px] overflow-x-auto whitespace-nowrap"
    >
      <ZebraCard imagesrc="/gc-valorant.png" />
      <ZebraCard imagesrc="/gc-csgo.png" />
      {/* <ZebraCard imagesrc="/gc-valorant.png" />
        <ZebraCard imagesrc="/gc-csgo.png" />
        <ZebraCard imagesrc="/gc-valorant.png" />
        <ZebraCard imagesrc="/gc-csgo.png" /> */}
    </div>
  );
};

export const ZebraCard: React.FC<{ imagesrc: string }> = ({ imagesrc }) => {
  return (
    <div
      id="zebra-card-cont"
      className="inline-block w-[120px] h-auto rounded-[5px]"
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
