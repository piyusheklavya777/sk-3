import { motion } from "framer-motion";
import Image from "next/image";
import { useNotificationStore } from "@/app/zustand/notification.store";
import { useConfettiStore } from "@/app/zustand/confetti.store";

export const JoinDiscordButton: React.FC = () => {
  const { addNotification } = useNotificationStore();

  const onClickJoinDiscord = () => {
    addNotification([
      {
        message:
          "Due to an attempted phishing attack on our company discord account our server has been restricted. We are currently working with discord to resolve this issue and return full access soon.",
        type: "error",
      },
    ]);
  };

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
      className="px-[35px] py-2 rounded-[12px] font-lato tracking-widest border-b border-[#c2bdff]/60 outline-none bg-gradient-to-b from-blue-800 via-blue-500 to-blue-800 transition duration-500 ease-in-out"
    >
      <div
        id="Join-discord-btn-cont-flex-74867"
        className="flex items-center justify-center gap-x-2"
        onClick={() => onClickJoinDiscord()}
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
