import { FAQCardsFlexBox } from "./faq-cards";

export const SectionFAQ: React.FC = () => {
  return (
    <div
      id="faq-section-cont-872364452"
      className="flex flex-col items-center justify-start gap-y-10 mx-[5%]"
    >
      <p
        id="faq-section-title-text-92746523"
        className="flex-none text-3xl lg:text-4xl text-white font-poppins font-normal tracking-widest"
      >
        What people are getting{" "}
        <span className="text-red-500 text-6xl underline cursor-pointer">
          curious
        </span>{" "}
        about.. . . .
      </p>
      <div id="faq-cards-clr-cont-64264564" className="flex-none mx-0">
        <FAQCardsFlexBox />
      </div>
      {/* <div id="faq-cards-grid-cont-8273645">
        <FAQCardsGrid />
      </div> */}
    </div>
  );
};
