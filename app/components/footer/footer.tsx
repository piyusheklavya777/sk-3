import { useNotificationStore } from "@/app/zustand/notification.store";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const Footer: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const handleScroll = () => {
    // Calculate 20vh from the current scroll position
    window.scrollTo({
      top: window.innerHeight * (isMobile ? 0.65 : 0.9),
      behavior: "smooth",
    });
  };
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
    <div
      id="footer-container-2356234"
      className="w-full h-[100px] flex flex-col ic jb py-5"
      style={{
        backgroundImage:
          "linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 223.2% )",
      }}
    >
      <div
        id="footer-icons-tray-9268473"
        className="flex jc ic gap-x-4 lg:gap-x-10 text-white/60"
      >
        {/* four icons */}
        <Image
          src="/discord-logo.svg"
          alt="Discord logo"
          className="rounded-[5px] bg-transparent opacity-70 cursor-pointer"
          onClick={() => onClickJoinDiscord()}
          width={24}
          height={24}
          priority
        />
        {/* <p
          className=" font-lato text-xs font-bold tracking-widest border-2 border-white/60 rounded-[5px] px-[4px] py-[3px] text-nowrap cursor-pointer"
          onClick={handleScroll}
        >
          JOIN NOW
        </p> */}
        <div
          id="lite-paper-cont"
          className="flex items-center gap-x-1 cursor-pointer"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1zoE_ZeA1pDdBigyziutEvmnPKv2dZtnYrXns3wo81BU/edit?usp=sharing"
            )
          } // please integrate redirect to lite paper at https://docs.google.com/document/d/1zoE_ZeA1pDdBigyziutEvmnPKv2dZtnYrXns3wo81BU/edit?usp=sharing
        >
          <span className="material-symbols-outlined  text-xl font-bold relative">
            description
          </span>
          <p
            id="lite-paper"
            className=" font-lato text-xs font-bold tracking-widest rounded-full text-center text-nowrap"
          >
            lite paper
          </p>
        </div>
      </div>
      <div
        id="copyright-stattement-87542go80"
        className="text-white/70 font-lato text-sm"
      >
        Ⓒ 2024 ScoreKount. All rights reserved.
      </div>
    </div>
  );
};

// pointer
