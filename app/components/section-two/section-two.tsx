"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const Cards = [
  {
    imagesrc: "/text-p2rr.png",
    points: [
      "Earn in-app currency with matches and tournaments",
      "Redeem unique in-game items with the currency",
      'Exclusive offers for top players "Etheletes"',
    ],
  },
  {
    imagesrc: "/text-leaderboard.png",
    points: [
      "AI based tracking with game specific reward system",
      "Performace based rewards",
      'Unique tier reward "Ethelete" for top winners',
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
        className="flex-none text-3xl lg:text-4xl text-white font-poppins font-normal tracking-widest bg-black/50 p-20 rounded-lg"
      >
        <span className="text-cyan-300">ScoreKount</span> brings to you.. . . .
      </p>
      <div id="grid-wrapper-6457834993" className="flex-none">
        <RhinoGrid />
      </div>
    </div>
  );
};

const RhinoGrid: React.FC = () => {
  const variants = {
    offscreen: {
      scale: 0.5,
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div
      id="Rhino-grid-cont-82749505"
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10"
    >
      {Cards.map((card, index) => (
        <motion.div
          key={index}
          className=""
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
          variants={variants}
          // style={{ overflow: "hidden", border: "1px solid redd" }}
        >
          {/* <GlossyCard
            key={index}
            imagesrc={card.imagesrc}
            points={card.points}
          /> */}
          <FeaturesCard
            key={index}
            imagesrc={card.imagesrc}
            description={card.points[0]}
          />
        </motion.div>
      ))}
    </div>
  );
};

const FeaturesCard: React.FC<{
  imagesrc: string;
  description: string;
}> = ({ imagesrc, description }) => {
  return (
    <div
      id="features-card-cont-6857987"
      className="h-full js ic bg-black/50 border border-[#000020]/30 rounded-[5px] flex flex-col"
    >
      <div id="title-images" className="flex-none">
        <Image
          className="relative w-full"
          src={imagesrc}
          alt="Next.js Logo"
          width={300}
          height={100}
          priority
        />
      </div>
    </div>
  );
};

const GlossyCard: React.FC<{
  imagesrc: string;
  points: string[];
}> = ({ imagesrc, points }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="h-full flex flex-col items-center justify-start bg-gray-900/30 border border-gray-700 rounded-lg p-4 shadow-lg backdrop-blur-md transform transition duration-500 hover:scale-[110%]">
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
          const borderColor =
            index % 2 === 0 ? "border-red-400" : "border-blue-300";
          return (
            <>
              <li
                key={index}
                className={`pl-[5%] text-sm md:text-md mb-1 text-white font-lato tracking-widest border-l-4 ${borderColor}`}
              >
                {point}
                {"🔥"}
              </li>
              <div id="vertical-spacer" className="h-[10px]"></div>
            </>
          );
        })}
      </ul>
    </div>
  );
};
