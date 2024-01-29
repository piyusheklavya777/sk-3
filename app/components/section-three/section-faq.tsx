import { FAQCardsFlexBox } from "./faq-cards";

export const SectionFAQ: React.FC = () => {
  return (
    <div
      id="faq-section-cont-872364452"
      className="flex flex-col items-center justify-start w-full"
    >
      <div
        id="title-bar-container-brupei"
        className="w-full bg-gradient-to-b from-transparent via-[#000757] to-transparent text-center py-20"
      >
        <p
          id="faq-section-title-text-92746523"
          className="w-full flex-none text-5xl lg:text-8xl text-white font-poppins font-thin tracking-widest py-2"
        >
          Questions<span className=" font-bold text-transparent cust-text-stroke-red">?</span>
        </p>
        <p className="text-white/80 text-sm font-poppins font-normal tracking-widest leading-[1rem]">
          We&apos;ve got answers{" "}
        </p>{" "}
      </div>
      {/* <div id="vertical-spacer-4giuoberwp" className="flex-none h-[20px]"></div> */}
      <div id="faq-cards-clr-cont-64264564" className="flex-none mx-[5%]">
        <FAQCardsFlexBox />
      </div>
      {/* <div id="faq-cards-grid-cont-8273645">
        <FAQCardsGrid />
      </div> */}
    </div>
  );
};
