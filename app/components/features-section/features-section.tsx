"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { FeaturesCard } from "./features-card";

const Cards = [
  {
    title: "P2RR",
    // imagesrc: "/text-p2rr.png",
    imagesrc: "/features-3-p2rr.png",
    points: [
      "Convert your game time into crypto earnings. Exclusive benefits for top ranked players in closed Beta",
      // old
      "Earn in-app currency with matches and tournaments",
      "Redeem unique in-game items with the currency",
      'Exclusive offers for top players "Etheletes"',
    ],
  },
  {
    title: "Leaderboard",
    // imagesrc: "/text-leaderboard.png",
    imagesrc: "/features-2-leaderboard.png",
    points: [
      "AI based tracking with game specific reward system",
      // old
      "AI based tracking with game specific reward system",
      "Performace based rewards",
      'Unique tier reward "Ethelete" for top winners',
    ],
  },

  {
    title: "1V1 Anyone",
    // imagesrc: "/text-1v1anyone.png",
    imagesrc: "/features-1-1v1.png",
    points: [
      "Challenge anyone with one click from our range of dynamic leaderboards",
      // old
      "Play 1v1 matches with anyone",
      "Challenge for quick duels",
    ],
  },
];

export const FeaturesSection: React.FC = () => {
  // Example data for the cards

  return (
    <div
      id="SectionTwo"
      className="flex flex-col items-center justify-start gap-y-10"
    >
      <div
        id="section-two-title-text-outer-box-92746523"
        className="flex-none p-5 rounded-lg"
      >
        <p
          id="section-two-title-text-inner-box-92746523"
          // className=" text-3xl lg:text-4xl text-white font-poppins font-normal tracking-widest border-l border-b-4 border-gray-300 rounded-bl-md p-3"
          className="text-4xl lg:text-6xl text-white font-poppins font-normal tracking-widest p-3"
        >
          Come Explore
        </p>
      </div>
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
      className="px-[5%] grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10" // bg-gradient-to-b from-transparent via-[#040512] via-[#040512] via-[#040512] to-transparent "
      style={{
        background:
          "linear-gradient(to bottom, transparent, #040512 20%, #040512 80%, transparent)",
      }}
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
            points={card.points[0]}
          /> */}
          <FeaturesCard
            key={index}
            title={card.title}
            imagesrc={card.imagesrc}
            description={card.points[0]}
          />
        </motion.div>
      ))}
    </div>
  );
};

// const GlossyCard: React.FC<{
//   imagesrc: string;
//   points: string[];
// }> = ({ imagesrc, points }) => {
//   const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
//   return (
//     <div className="h-full flex flex-col items-center justify-start bg-gray-900/30 border border-gray-700 rounded-lg p-4 shadow-lg backdrop-blur-md transform transition duration-500 hover:scale-[110%]">
//       <div id="sk-logo" className="flex-none">
//         <Image
//           className="relative"
//           src={imagesrc}
//           alt="Next.js Logo"
//           width={isMobile ? 240 : 300}
//           height={100}
//           priority
//         />
//       </div>
//       <div id="vertical-spacer" className="flex-none h-[10px]"></div>
//       <ul className="lg:px-[20%]">
//         {points.map((point, index) => {
//           const borderColor =
//             index % 2 === 0 ? "border-red-400" : "border-blue-300";
//           return (
//             <>
//               <li
//                 key={index}
//                 className={`pl-[5%] text-sm md:text-md mb-1 text-white font-lato tracking-widest border-l-4 ${borderColor}`}
//               >
//                 {point}
//                 {"🔥"}
//               </li>
//               <div id="vertical-spacer" className="h-[10px]"></div>
//             </>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
