"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Cards = [
  {
    imagesrc: "/text-leaderboard.png",
    points: [
      "AI based tracking with game specific reward system",
      "Performace based rewards",
      'Unique tier reward "Ethelete" for top winners',
    ],
  },
  {
    imagesrc: "/text-p2rr.png",
    points: [
      "Earn in-app currency with matches and tournaments",
      "Redeem unique in-game items with the currency",
      'Exclusive offers for top players "Etheletes"',
    ],
  },
  {
    imagesrc: "/text-1v1anyone.png",
    points: ["Play 1v1 matches with anyone", "Challenge for quick duels"],
  },
  {
    imagesrc: "/text-brands.png",
    points: [
      "Reach engaged gamers through the ScoreKount Network",
      "engage them through wallets with exciting in-game brand activation",
    ],
  },
];

export const SectionTwo: React.FC = () => {
  // Example data for the cards

  return (
    <div
      id="SectionTwo"
      className="mx-[5%] flex flex-col items-center justify-start gap-y-10"
    >
      <p
        id="section-two-title-text-92746523"
        className="flex-none text-3xl lg:text-4xl text-white font-poppins font-normal tracking-widest"
      >
        Abilities <span className="text-cyan-300">ScoreKount</span> brings to
        you.. . . .
      </p>
      <div id="grid-wrapper-6457834993" className="flex-none ">
        <RhinoGrid />
      </div>
    </div>
  );
};

const RhinoGrid: React.FC = () => {
  return (
    <div
      id="Rhino-grid-cont-82749505"
      className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:gap-10 mx-[5%]"
    >
      {Cards.map((card, index) => (
        <GlossyCard key={index} imagesrc={card.imagesrc} points={card.points} />
      ))}
    </div>
  );
};

const GlossyCard: React.FC<{
  imagesrc: string;
  points: string[];
}> = ({ imagesrc, points }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="flex flex-col items-center justify-start bg-gray-900/30 border border-gray-700 rounded-lg p-4 shadow-lg backdrop-blur-md">
      <div id="sk-logo" className="flex-none">
        <Image
          className="relative"
          src={imagesrc}
          alt="Next.js Logo"
          width={isMobile ? 240 : 300}
          height={100}
          priority
        />
      </div>
      <div id="vertical-spacer" className="flex-none h-[10px]"></div>
      <ul className="lg:px-[20%]">
        {points.map((point, index) => {
          const borderColor = index % 2 === 0 ? "border-red-400" : "border-blue-300";
          return (
            <>
              <li
                key={index}
                className={`pl-[5%] text-sm md:text-md mb-1 text-white font-lato tracking-widest border-l-4 ${borderColor}`}
              >
                {point}{"🔥"}
              </li>
              <div id="vertical-spacer" className="h-[10px]"></div>
            </>
          );
        })}
      </ul>
    </div>
  );
};
