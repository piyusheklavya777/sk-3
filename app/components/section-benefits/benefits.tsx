import { LottieAnimation } from "@/app/atoms/lottie-react-wrapper";

import gamenetworkinglottie from "./game-networking-lottie.json";

import walletlottie from "./wallet-lottie.json";

export const BenefitsSection: React.FC = () => {
  return (
    <div id="section-benefits-23497" className="w-full">
      <div
        id="benefits-cont-flex-82340572"
        className="flex flex-col items-center justify-center gap-y-10"
      >
        <div id="networking-slide-cont-234097" className="flex-none">
          <NetworkingSlide />
        </div>
        <div id="networking-slide-cont-234097" className="flex-none">
          <WalletSlide />
        </div>
      </div>
    </div>
  );
};

const NetworkingSlide: React.FC = () => {
  // it is a row flex with image on the left and content on the right
  // content section is of 2 parts: title and description title
  return (
    <div
      id="networking-slide-234097"
      className="flex flex-col lg:flex-row items-center justify-between"
    >
      <div id="networking-slide-image-234097" className="flex-none-no">
        <LottieAnimation lottiejsonfile={gamenetworkinglottie} />
      </div>
      <div
        id="networking-slide-content-234097"
        className="flex flex-col jb is gap-y-5 px-5"
      >
        <h2
          id="networking-slide-title-234097"
          className="text-6xl font-poppins text-[rgba(255,255,255,1)]"
        >
          Outreach for Brands
        </h2>
        <p
          id="networking-slide-description-234097"
          className="flex-none font-lato text-xl text-[rgba(224,243,255,0.8)] w-[70o%]"
        >
          reach engaged gamers through the ScoreKount network
        </p>
      </div>
    </div>
  );
};

const WalletSlide: React.FC = () => {
  return (
    <div
      id="networking-slide-234097"
      className="flex flex-col lg:flex-row-reverse items-center justify-between"
    >
      <div id="networking-slide-image-234097" className="flex-none-no">
        <LottieAnimation lottiejsonfile={walletlottie} />
      </div>
      <div
        id="networking-slide-content-234097"
        className="flex flex-col jb ie gap-y-5 px-5"
      >
        <h2
          id="networking-slide-title-234097"
          className="text-[52px] leading-tight font-poppins text-[rgba(255,255,255,1)] text-right"
        >
          Engagement for Games
        </h2>
        <p
          id="networking-slide-description-234097"
          className="flex-none font-lato text-xl text-[rgba(224,243,255,0.8)] w-[7k0%] text-right"
        >
          engage players through wallets with exciting in-game brand activation
        </p>
      </div>
    </div>
  );
};
