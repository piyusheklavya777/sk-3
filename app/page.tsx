"use client";
import { useMediaQuery } from "react-responsive";
import { SectionOne } from "./components/section-one/section-one";
import { FeaturesSection } from "./components/features-section/features-section";
import { SectionFAQ } from "./components/section-three/section-faq";
import { ClosedBetaSection } from "./components/closed-beta-form-section/closed-beta-form-section";
import Image from "next/image";
import { BenefitsSection } from "./components/section-benefits/benefits";
import { Footer } from "./components/footer/footer";
import { ParticlesEffect } from "./atoms/particles-effect-wrapper";

export default function Home() {
  return (
    <div id="body" className=" cust-body-bkg-black relative">
      <div
        id="body-flex-box-cont-295039753"
        className="z-30 relative flex flex-col items-center justify-between"
      >
        <div
          id="vertical-separator-252njg4trw"
          className="flex-none h-[20px]"
        ></div>
        <div id="section-1-container" className="flex-none w-full">
          <SectionOne />
        </div>
        <div id="section-2-container" className="flex-none relative">
          <div
            id="particles-effect-wrapper-235235"
            className="absolute z-0 inset-0"
          >
            <ParticlesEffect />
          </div>
          <div
            id="section-2-content-clr-235235"
            className="relative z-20 section-2-content-cont"
          >
            <FeaturesSection />
          </div>
        </div>
        <div
          id="join-closed-beta-section"
          className="flex-none pt-4 cust-body-bkg-blue w-full"
        >
          {/* bg is applied here so that paddings also covered with it */}
          <ClosedBetaSection />
        </div>
        <div
          id="vertical-separator-252njg4trw"
          className="flex-none h-[20px]"
        ></div>

        <div
          id="vertical-separator-252njg4trw"
          className="flex-none h-[20px]"
        ></div>
        <div id="section-graphics-8037145" className="flex-none">
          <BenefitsSection />
        </div>
        <div
          id="vertical-separator-252njg4trw"
          className="flex-none h-[20px]"
        ></div>
        <div id="section-3-container" className="flex-none">
          <SectionFAQ />
        </div>
        <div
          id="vertical-separator-589274632"
          className="flex-none h-[20px]"
        ></div>
      </div>
      <div id="navbar-clr-4253564" className="w-full z-40">
        <Footer />
      </div>
      {/* absolutes */}
      <div id="navbar-clr-4253564" className="w-full z-40 fixed top-0">
        <NavBar />
      </div>
    </div>
  );
}

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const handleScroll = () => {
    // Calculate 20vh from the current scroll position
    window.scrollTo({
      top: window.innerHeight * (isMobile ? 0.6 : 0.8),
      behavior: "smooth",
    });
  };
  return (
    <div
      id="navbarcont--235131"
      // className="w-full z-40 fixed top-0 flex items-center justify-center h-10"
      className="w-full flex justify-between ic bg-black"
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
          className="text-white font-bold px-2 py-1 mx-[20px] my-[15px] text-nowrap text-sm font-poppins tracking-widest border-2 border-white/80 rounded-[5px] cursor-pointer hover:bg-white hover:text-black transition duration-300 ease-in-out"
          onClick={handleScroll}
        >
          JOIN
        </p>
      </div>
    </div>
  );
};

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
