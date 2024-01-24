// cloosed beta form section

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const theme = {
  colors: {
    primary: "#e3e0ff",
  },
};

const skin = "#c2bdff";

export const ClosedBetaSection: React.FC = () => {
  return (
    <div id="closed-beta-section" className="flex flex-col js ic gap-y-2">
      <div id="beta-reg-form-caller-3645437" className="flex-none">
        <BetaRegistrationForm />
      </div>
      <div
        id="separator-76345748"
        className="flex-none w-full h-[5px]"
      ></div>
      <div id="join-discord-button" className="flex-none">
        <JoinDiscordButton />
      </div>

      <div id="registrations-counter" className="flex-none">
        <RegistrationsCounter />
      </div>
    </div>
  );
};

export const JoinDiscordButton: React.FC = () => {
  return (
    <motion.button
      animate={{ scale: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
      id="closed-beta-form-submit-button-8273645"
      className="px-[10px] py-2 rounded-[5px] font-lato tracking-widest border-b border-[#c2bdff]/60 outline-none bg-blue-500 transition duration-500 ease-in-out"
    >
      <div
        id="Join-discord-btn-cont-flex-74867"
        className="flex items-center justify-center gap-x-2"
      >
        <Image
          className="relative z-10"
          src="/discord-logo.svg"
          alt="Next.js Logo"
          width={30}
          height={30}
          priority
        />
        <span className="text-white text-sm">JOIN DISCORD</span>
      </div>
    </motion.button>
  );
};

const GAMES_LIST = [
  {
    machinename: "csgo",
    imagesrc: "/GAME_CARDS_NEW/gc-1-csgo_image.png",
    type: "image",
  },
  {
    machinename: "csgo_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-1-csgo_stroke.png",
    type: "stroke",
  },
  {
    machinename: "roguecompany",
    imagesrc: "/GAME_CARDS_NEW/gc-2-roguecompany_image.png",
    type: "image",
  },
  {
    machinename: "roguecompany_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-2-roguecompany_stroke.png",
    type: "stroke",
  },
  {
    machinename: "callofduty",
    imagesrc: "/GAME_CARDS_NEW/gc-3-callofduty_image.png",
    type: "image",
  },
  {
    machinename: "callofduty_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-3-callofduty_stroke.png",
    type: "stroke",
  },
  {
    machinename: "rainbowsix",
    imagesrc: "/GAME_CARDS_NEW/gc-4-rainbowsix_image.png",
    type: "image",
  },
  {
    machinename: "rainbowsix_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-4-rainbowsix_stroke.png",
    type: "stroke",
  },
  {
    machinename: "destiny",
    imagesrc: "/GAME_CARDS_NEW/gc-5-destiny_image.png",
    type: "image",
  },
  {
    machinename: "destiny_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-5-destiny_stroke.png",
    type: "stroke",
  },
  {
    machinename: "warframe",
    imagesrc: "/GAME_CARDS_NEW/gc-6-warframe_image.png",
    type: "image",
  },
  {
    machinename: "warframe_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-6-warframe_stroke.png",
    type: "stroke",
  },
  {
    machinename: "halo",
    imagesrc: "/GAME_CARDS_NEW/gc-7-halo_image.png",
    type: "image",
  },
  {
    machinename: "halo_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-7-halo_stroke.png",
    type: "stroke",
  },
  {
    machinename: "escapefromtarkov",
    imagesrc: "/GAME_CARDS_NEW/gc-8-escapefromtarkov_image.png",
    type: "image",
  },
  {
    machinename: "escapefromtarkov_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-8-escapefromtarkov_stroke.png",
    type: "stroke",
  },
  {
    machinename: "overwatch",
    imagesrc: "/GAME_CARDS_NEW/gc-9-overwatch_image.png",
    type: "image",
  },
  {
    machinename: "overwatch_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-9-overwatch_stroke.png",
    type: "stroke",
  },
  {
    machinename: "arenaofvalor",
    imagesrc: "/GAME_CARDS_NEW/gc-10-arenaofvalor_image.png",
    type: "image",
  },
  {
    machinename: "arenaofvalor_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-10-arenaofvalor_stroke.png",
    type: "stroke",
  },
  {
    machinename: "paladins",
    imagesrc: "/GAME_CARDS_NEW/gc-11-paladins_stroke.png",
    type: "stroke",
  },
  {
    machinename: "paladins_image",
    imagesrc: "/GAME_CARDS_NEW/gc-11-paladins_image.png",
    type: "image",
  },
  {
    machinename: "valorant",
    imagesrc: "/GAME_CARDS_NEW/gc-12-valorant_image.png",
    type: "image",
  },
  {
    machinename: "valorant_stroke",
    imagesrc: "/GAME_CARDS_NEW/gc-12-valorant_stroke.png",
    type: "stroke",
  },
];

const BetaRegistrationForm: React.FC = () => {
  // create a state for the selected games
  const [gamesList, setGamesList] = useState<
    {
      machinename: string;
      imagesrc: string;
      type: string;
      selected: boolean;
    }[]
  >(
    GAMES_LIST.filter((e) => e.type === "stroke").map((e) => ({
      ...e,
      selected: false,
    }))
  );

  return (
    <div
      id="closed-beta-form-section-92403y980"
      //   className="flex flex-col items-center justify-start gap-y-5 p-4 rounded-[16px] border-t-2 border-[#c2bdff]/60 bg-gradient-to-b from-[#03011c] to-transparent"
      className="flex flex-col items-center justify-start gap-y-2 p-4 rounded-[16px] border-t-2 border-[#d4d4ff]/80 bg-gradient-to-b from-black to-transparent anim-shiny-patch-travels-across z-10"
    >
      <input
        type="text"
        placeholder="email"
        className="w-[300px] h-[50px] rounded-[5px] border-b-2 border-[#d4d4ff]/80 text-[#c2bdff]/70 placeholder:text-[#d4d4ff]/40 placeholder:font-lato font-lato p-2 outline-none bg-black/80 z-20"
      />
      <input
        type="text"
        placeholder="discord handle e.g. username#1234"
        className="w-[300px] h-[50px] rounded-[5px] border-b-2 border-[#d4d4ff]/80 text-[#c2bdff]/70 placeholder:text-[#d4d4ff]/40 placeholder:font-lato font-lato p-2 outline-none bg-black/80 z-20"
      />
      {/* code for a multiselect */}
      <div
        id="select-games-title-cont"
        className="w-full inline-flex js ic pl-1"
      >
        <h1 className="text-[#d4d4ff]/70 font-lato text-sm">
          Select your games
        </h1>
      </div>
      <SelectGamesGrid gameList={gamesList} setGameList={setGamesList} />
      <div
        id="separator-76345748"
        className="z-20 relative flex-none w-full h-[20px]"
      ></div>
      <motion.button
        animate={{ scale: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        id="closed-beta-form-submit-button-8273645"
        className="px-4 py-[14px] rounded-[5px] font-lato tracking-widest text-[#c2bdff]/90 text-sm border-b border-[#c2bdff]/60 p-2 outline-none bg-black/80 transition duration-500 ease-in-out hover:bg-[#c2bdff]/50 hover:text-black"
      >
        JOIN CLOSED BETA
      </motion.button>
    </div>
  );
};

const SelectGamesGrid: React.FC<{
  gameList: {
    machinename: string;
    imagesrc: string;
    type: string;
    selected: boolean;
  }[];
  setGameList: React.Dispatch<
    React.SetStateAction<
      {
        machinename: string;
        imagesrc: string;
        type: string;
        selected: boolean;
      }[]
    >
  >;
}> = ({ gameList, setGameList }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <div id="select-games-multi-list" className="flex-none relative h-[270px]">
      {/* absolute content */}
      <div
        id="body-bkg-bottom-fade-into-blue-29458548"
        className="z-20 absolute inset-x-0 top-0 h-[30%] bg-cover bg-center overflow-hidden pointer-events-none bg-gradient-to-b to-transparent from-[rgba(0,0,40,1)]"
      ></div>
      <div
        id="body-bkg-bottom-fade-into-blue-29458548"
        className="z-20 absolute inset-x-0 bottom-0 h-[30%] bg-cover bg-center overflow-hidden pointer-events-none bg-gradient-to-b from-transparent to-[rgba(0,0,40,1)]"
      ></div>
      {/* absolute content ends */}
      <div
        id="games-selection-scrol-container"
        className="flex-none h-[270px] overflow-auto"
      >
        <div
          id="select-games-grid"
          className="grid grid-cols-3 grid-rows-4 gap-2"
        >
          {gameList
            .filter((game) => game.type === "stroke")
            .map((e, i) => {
              return (
                <div
                  id="select-game-1"
                  className="flex-none relative"
                    key={i}
                  onClick={() => {
                    setGameList((prev) => {
                      return prev.map((prevGame) => {
                        if (prevGame.machinename === e.machinename) {
                          return {
                            ...prevGame,
                            selected: !prevGame.selected,
                          };
                        } else {
                          return prevGame;
                        }
                      });
                    });
                  }}
                >
                  <Image
                    className="relative z-10"
                    src={e.imagesrc}
                    alt="Next.js Logo"
                    width={isMobile ? 100 : 90}
                    height={isMobile ? 100 : 100}
                    priority
                  />
                  {e.selected && (
                    <div
                      id="each-game-selected-mask"
                      className="absolute z-20 inset-0 flex items-center justify-center bg-black/80"
                    >
                      <span className="material-symbols-outlined text-4xl text-green-700/60">
                        check_circle
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const RegistrationsCounter: React.FC = () => {
  return (
    <div
      id="closed-beta-registrations-counter-8273645"
      className="flex flex-col items-center justify-start gap-y-2 p-4 rounded-[16px]"
    >
      <p
        id="closed-beta-registrations-counter-text-8273645"
        className="text-gray-200 font-lato tracking-widest text-4xl lg:text-6xl"
      >
        44,906+
      </p>
      <div
        id="separator-76345748"
        className="flex-none w-full h-[2px] bg-gradient-to-r from-transparent via-[#c2bdff] to-transparent"
      ></div>
      <p
        id="closed-beta-registrations-counter-text-8273645"
        className="text-[#c2bdff] font-lato tracking-widest text-3xl lg:text-3xl"
      >
        REGISTRATIONS
      </p>
    </div>
  );
};
