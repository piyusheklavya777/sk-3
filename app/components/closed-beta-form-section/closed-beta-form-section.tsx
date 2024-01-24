// cloosed beta form section

import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { RegistrationsCounter } from "./registration-counter";
import { BetaRegistrationForm } from "./registration-form";

const theme = {
  colors: {
    primary: "#e3e0ff",
  },
};

const skin = "#c2bdff";

export const ClosedBetaSection: React.FC = () => {
  return (
    <div
      id="closed-beta-section-lnjrknjs"
      className="flex flex-col items-center justify-center gap-y-2"
    >
      <div id="closed-beta-title-cont-895423vfe" className="flex-none">
        {/* <h1 className=" font-lato text-lg lg:text-4xl bg-clip-to-text bg-gradiento-to-b from-transparent via-white to-transparent"> */}
        <h1 className=" font-lato text-lg text-[#c2bdff]/90 tracking-widest">
          ACCEPTING INTERESTS NOW
        </h1>
      </div>
      <div
        id="closed-beta-content-vnjlrwvw"
        className="flex flex-col js ic gap-y-2"
      >
        <div id="beta-reg-form-caller-3645437" className="flex-none">
          <BetaRegistrationForm />
        </div>
        <div id="separator-76345748" className="flex-none w-full h-[5px]"></div>
        <div id="join-discord-button" className="flex-none">
          <JoinDiscordButton />
        </div>
        <div id="separator-76345748" className="flex-none w-full h-[5px]"></div>
        <div id="registrations-counter" className="flex-none">
          <RegistrationsCounter />
        </div>
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
      className="px-[10px] py-2 rounded-[5px] font-lato tracking-widest border-b border-[#c2bdff]/60 outline-none bg-gradient-to-b from-blue-800 via-blue-500 to-blue-800 transition duration-500 ease-in-out"
    >
      <div
        id="Join-discord-btn-cont-flex-74867"
        className="flex items-center justify-center gap-x-2"
        onClick={() => alert("Due to an attempted phishing attack on our company discord account our server has been restricted. We are currently working with discord to resolve this issue and return full access soon. @Sada VGK")}
      >
        <Image
          className="relative z-10"
          src="/discord-logo.svg"
          alt="Next.js Logo"
          width={30}
          height={30}
          priority
        />
        <span className="text-white text-sm">JOIN SERVER</span>
      </div>
    </motion.button>
  );
};
