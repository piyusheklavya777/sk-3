import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import GAMES_LIST from "./games-list.json";
import { useMediaQuery } from "react-responsive";
import { registerInterest } from "@/app/utilities/vercel-db-utils";

export const BetaRegistrationForm: React.FC = () => {
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

  const [email, setEmail] = useState("");
  const [discordHandle, setDiscordHandle] = useState("");

  //   const onSumbitHandler = () => {
  //     // validate email is correct and regex check for email
  //     // validate discord handle is correct
  //     // validate atleast one game is selected
  //     // make RestClient api call to the sheet api using RestClient
  //   };

  const onSumbitHandler = async () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Discord handle validation
    const discordRegex = /^.+#[0-9]{4}$/;
    if (!discordRegex.test(discordHandle)) {
      alert("Please enter a valid Discord handle (e.g., username#1234).");
      return;
    }

    // Check if at least one game is selected
    const isGameSelected = gamesList.some((game) => game.selected);
    if (!isGameSelected) {
      alert("Please select at least one game.");
      return;
    }

    // Prepare the data to be sent
    const selectedGames = gamesList
      .filter((game) => game.selected)
      .map((game) => game.machinename);

    // API call
    try {
      const response = await registerInterest({
        email,
        discordHandle,
        selectedGames,
      });

      console.log("API response:", response);
      alert("Registration successful!");
    } catch (error) {
      console.error("API call failed:", error);
      alert("Failed to submit registration. Please try again.");
    }
  };

  return (
    <div
      id="closed-beta-form-section-92403y980"
      //   className="flex flex-col items-center justify-start gap-y-5 p-4 rounded-[16px] border-t-2 border-[#c2bdff]/60 bg-gradient-to-b from-[#03011c] to-transparent"
      className="flex flex-col items-center justify-start gap-y-2 px-4 pt-4 rounded-[16px] border-t-2 border-[#d4d4ff]/80 bg-gradient-to-b from-[#050552]- from-[#020229] to-transparent anim-shiny-patch-travels-across z-10"
    >
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        className="w-[300px] h-[50px] rounded-[5px] border-b-2 border-[#d4d4ff]/80 text-[#c2bdff]/70 placeholder:text-[#d4d4ff]/40 placeholder:font-lato font-lato p-2 outline-none bg-black/80 z-20"
      />
      <input
        type="text"
        value={discordHandle}
        onChange={(e) => setDiscordHandle(e.target.value)}
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
        onClick={onSumbitHandler}
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
