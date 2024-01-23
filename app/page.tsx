"use client";
import { useMediaQuery } from "react-responsive";
import { SectionOne } from "./components/section-one/section-one";
import { SectionTwo } from "./components/section-two/section-two";
import { SectionFAQ } from "./components/section-three/section-faq";
import { ClosedBetaSection } from "./components/closed-beta-form-section/closed-beta-form-section";
import Image from "next/image";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const handleScroll = () => {
    // Calculate 20vh from the current scroll position
    window.scrollTo({
      top: window.innerHeight * (isMobile ? 0.6 : 0.8),
      behavior: "smooth",
    });
  };
  return (
    <div id="body" className=" cust-body-bkg relative">
      <div
        id="body-pattern-29638264"
        className="z-20 absolute inset-0 bg-opacity-50 opacity-40"
      ></div>
      {/* <div
        id="body-bkg-video-29458548"
        className="z-10 absolute inset-0 bg-cover bg-center overflow-hidden"
      >
        <BKGVideo src="/overwatch_action.mp4" />
      </div> */}
      <div
        id="info-pill-35624574"
        className="w-full z-40 fixed top-2 inset-x-0 inline-flex ic jc"
      >
        <BetaLaunchPill />
      </div>
      <div
        id="navbar-235131"
        // className="w-full z-40 fixed top-0 flex items-center justify-center h-10"
        className="w-full z-40 fixed flex justify-between ic bg-black"
      >
        <div id="navbar-logo-9765328 pl-[20px] border">
          <Image
            className="relative"
            src="/sk-logo.png"
            alt="Next.js Logo"
            width={isMobile ? 80 : 80}
            height={40}
            priority
          />
        </div>
        <div></div>
        <div id="signup-cta-wh65434" className="flex justify-end items-center">
          <p
            className="text-white/80 font-bold p-2 mx-[20px] my-[10px] text-nowrap text-sm font-poppins tracking-widest border-2 border-white/50 rounded-[5px] cursor-pointer"
            onClick={handleScroll}
          >
            SIGN UP
          </p>
        </div>
      </div>
      <div
        id="body-flex-box-cont-295039753"
        className="z-30 relative flex flex-col gap-y-10 items-center justify-between"
      >
        <div id="section-1-container" className="flex-none">
          <SectionOne />
        </div>
        <div id="join-closed-beta-section" className="flex-none">
          <ClosedBetaSection />
        </div>
        <div id="section-2-container" className="flex-none">
          <SectionTwo />
        </div>
        <div id="section-3-container" className="flex-none">
          <SectionFAQ />
        </div>
        <div
          id="vertical-separator-589274632"
          className="flex-none h-[20px]"
        ></div>
      </div>
    </div>
  );
}

const BetaLaunchPill: React.FC = () => {
  return (
    <p className="max-w-[300px] bg-black px-2 py-1 rounded-full text-md text-gray-400 font-lato font-normal tracking-widest">
      <span
        id="beta_pill_text_8273645"
        className="px-1 text-sm border border-1 uppercase border-green-700 rounded-full font text-green-500 cursor-pointer tracking-tight"
      >
        Beta
      </span>{" "}
      coming soon 🎉
    </p>
  );
};
