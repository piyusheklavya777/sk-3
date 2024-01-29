"use client";
import { useMediaQuery } from "react-responsive";
import { SectionLanding } from "./components/section-one/section-landing";
import { FeaturesSection } from "./components/features-section/features-section";
import { SectionFAQ } from "./components/section-three/section-faq";
import { ClosedBetaSection } from "./components/closed-beta-form-section/closed-beta-form-section";
import Image from "next/image";
import { BenefitsSection } from "./components/section-benefits/benefits";
import { Footer } from "./components/footer/footer";
import { ParticlesEffect } from "./atoms/particles-effect/particles-effect-wrapper";
import { RegistrationsCounter } from "./components/closed-beta-form-section/registration-counter";
import { NotificationPill } from "./atoms/notification-pill";
import { ScreenConfetti } from "./atoms/screen-confetti";

export default function Home() {
  return (
    <div id="body" className=" cust-body-bkg-black relative">
      <div
        id="body-flex-box-cont-295039753"
        className="z-30 relative flex flex-col items-center justify-between"
      >
        <div id="section-1-container" className="flex-none w-full">
          <SectionLanding />
        </div>
        <div id="section-2-container" className="flex-none relative">
          <div
            id="particles-effect-wrapper-235235"
            className="absolute z-0 inset-0"
          >
            <ParticlesEffect preset="web" uniqueId="hueioprw4rgqv" />
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
          className="flex-none pt-4 cust-body-bkg-blue w-full relative"
        >
          {/* bg is applied here so that paddings also covered with it */}
          <div
            id="section-closedbeta-content-clr-235235"
            className="relative z-20"
          >
            <ClosedBetaSection />
          </div>
          {/* absolutes */}
          <div
            id="particles-effect-wrapper-235235"
            className="absolute z-0 inset-0"
          >
            <ParticlesEffect preset="stars" uniqueId="rqbrqi0gh2495gkr" />
          </div>
          <div
            id="bottom-filter-39782tfu4"
            className="absolute z-0 inset-x-0 bottom-0 h-[30%] bg-gradient bg-gradient-to-b from-transparent to-black bordedr-2"
          ></div>
          <div
            id="bottom-filter-39782tfu4"
            className="absolute z-0 inset-x-0 top-0 h-[30%] bg-gradient bg-gradient-to-b from-black to-transparent bordder"
          ></div>
        </div>
        <div
          id="vertical-separator-252njg4trw"
          className="flex-none h-20"
        ></div>
        <div
          id="section-registrations-counter-cont-87926543fhj"
          className="flex-none w-full"
        >
          <div
            id="registrations-counter-clr-235235"
            className="relative z-20 w-full"
          >
            <RegistrationsCounter />
          </div>
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
          className="flex-none h-[50px]"
        ></div>
        <div id="section-3-container" className="flex-none w-full">
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
      <div
        id="screen-confetti-cont-iprngqeow4"
        className="fixed z-40 inset-0 pointer-events-none"
      >
        <ScreenConfetti />
      </div>
      <div id="navbar-clr-4253564" className="z-40 fixed inset-x-0 top-0">
        <NavBar />
      </div>
      <div
        id="notification-pill-fixed-cont-u80gbejrqvw"
        className="fixed z-40 top-20 inset-x-0"
      >
        <div id="notification-pill-clr" className="flex jc ic">
          <NotificationPill />
        </div>
      </div>
    </div>
  );
}

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const handleScroll = () => {
    const element = document.getElementById("join-closed-beta-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
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
          className="text-white font-bold px-2 py-1 mx-[20px] my-[15px] text-nowrap text-sm font-poppins tracking-widest border border-white/80 rounded-[5px] cursor-pointer hover:bg-white hover:text-black transition duration-300 ease-in-out"
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
