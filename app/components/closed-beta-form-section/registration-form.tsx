import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Confetti from "react-confetti";
import GAMES_LIST from "./games-list.json";
import { useMediaQuery } from "react-responsive";
import { registerInterest } from "@/app/utilities/vercel-db-utils";
import { add, set } from "lodash";
import { useNotificationStore } from "@/app/zustand/notification.store";
import { useConfettiStore } from "@/app/zustand/confetti.store";

export const BetaRegistrationForm: React.FC<{
  signalRegCountRefresh: () => void;
}> = ({ signalRegCountRefresh }) => {
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

  const { addNotification } = useNotificationStore();
  const { setConfetti } = useConfettiStore();

  const [email, setEmail] = useState("");
  const [discordHandle, setDiscordHandle] = useState("");

  const onSumbitHandler = async () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      addNotification([
        {
          message: "Please enter a valid email address.",
          type: "error",
        },
      ]);
      return;
    }

    // Discord handle validation
    if (!discordHandle) {
      addNotification([
        {
          message: "Please enter a valid Discord handle. e.g., warriorspirit",
          type: "error",
        },
      ]);
      return;
    }

    // Check if at least one game is selected
    const isGameSelected = gamesList.some((game) => game.selected);
    if (!isGameSelected) {
      addNotification([
        {
          message: "Please select at least one game.",
          type: "error",
        },
      ]);
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

      setEmail("");
      setDiscordHandle("");
      setGamesList(
        GAMES_LIST.filter((e) => e.type === "stroke").map((e) => ({
          ...e,
          selected: false,
        }))
      );

      addNotification([
        {
          message:
            "Congratulations! You have successfully registered for the closed beta. We will contact you soon.",
          type: "success",
        },
      ]);
      setConfetti({
        numberOfPieces: 300,
        duration: 8000,
      });
      signalRegCountRefresh();

      console.log("API response:", response);
      //   alert("Registration successful!");
    } catch (error) {
      console.error("API call failed:", error);
      addNotification([
        {
          message: "Registration failed. Please try again later.",
          type: "error",
        },
      ]);
      signalRegCountRefresh();
    }
  };

  return (
    <div
      id="closed-beta-form-section-92403y980"
      //   className="flex flex-col items-center justify-start gap-y-5 p-4 rounded-[16px] border-t-2 border-[#c2bdff]/60 bg-gradient-to-b from-[#03011c] to-transparent"
      className="rounded-[16px] border-t-2 border-[#c2bdff]/70 bg-gradient-to-b from-black/90 to-transparent anim-shiny-patch-travels-across overflow-hidden flex flex-col items-center justify-start gap-y-6 px-4 relative"
    >
      {/* absolutes */}
      <div
        id="shiny-patch-2547980"
        className="z-20 absolute inset-0 anim-shiny-patch-travels-across bg-red-500"
      ></div>
      {/* absolutes end */}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        className="w-[300px] px-2 py-1 rounded-[5px] border-b-2 border-[#c2bdff]/60 text-[#c2bdff]/70 placeholder:text-[#d4d4ff]/40 placeholder:font-lato font-lato outline-none bg-[rgba(139,139,235,0.09)] z-20"
      />

      <input
        type="text"
        value={discordHandle}
        onChange={(e) => setDiscordHandle(e.target.value)}
        placeholder="discord handle e.g. warriorspirit"
        className="w-[300px] px-2 py-1 rounded-[5px] border-b-2 border-[#c2bdff]/60 text-[#c2bdff]/70 placeholder:text-[#d4d4ff]/40 placeholder:font-lato font-lato outline-none bg-[rgba(139,139,235,0.09)] z-20"
      />
      {/* code for a multiselect */}
      <div
        id="select-games-title-cont"
        className="w-full inline-flex js ic pl-1"
      >
        <h1 className="text-[#c2bdff]/90 font-lato font-bold text-sm">
          Click to select your games{" "}
          <span
            id="number-of-games-selected-counter"
            className="text-[#c2bdff]/70 font-lato font-normal text-[12px] italic"
          >
            ({gamesList.filter((e) => e.selected).length}/{gamesList.length})
          </span>
        </h1>
      </div>
      <SelectGamesGrid gameList={gamesList} setGameList={setGamesList} />
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
        className="px-2 py-[6px] rounded-[10px] border-b border-[#c2bdff]/60 outline-none cust-gold-gradient transition duration-500 ease-in-out hover:scale-[120%]"
      >
        <p className="text-xl font-poppins cust-text-inner-shadow drop-shadow-lg font-bold tracking-wide cust-gold-text">
          JOIN CLOSED BETA
        </p>
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
                  className="flex-none relative cursor-pointer hover:scale-[150%] hover:z-20 transition duration-500 ease-in-out"
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
                      className="absolute z-20 inset-0 flex items-center justify-center bg-black/80 cursor-pointer"
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
