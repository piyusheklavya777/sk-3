"use client";
import { useMediaQuery } from "react-responsive";
import { SectionOne } from "./components/section-one/section-one";
import { SectionTwo } from "./components/section-two/section-two";
import { SectionFAQ } from "./components/section-three/section-faq";

export default function Home() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
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
        className="w-full z-40 fixed top-0 flex items-center justify-center h-10"
      >
        <BetaLaunchPill />
      </div>
      <div
        id="body-flex-box-cont-295039753"
        className="z-30 relative flex flex-col gap-y-10 items-center justify-between"
      >

        <div id="section-1-container" className="flex-none">
          <SectionOne />
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
      version coming soon 🎉
    </p>
  );
};
