import Image from "next/image";
import Typewriter from "typewriter-effect";

export const FeaturesCard: React.FC<{
  title: string;
  imagesrc: string;
  description: string;
}> = ({ title, imagesrc, description }) => {
  return (
    <div
      id="features-card-cont-6857987"
      className="h-full js ic bg-black/50 border border-[#000020]/30 rounded-[5px] flex flex-col p-2"
    >
      <div id="title-images" className="flex-none">
        <Image
          className="relative w-full"
          src={imagesrc}
          alt="Next.js Logo"
          width={300}
          height={300}
          priority
        />
      </div>
      <div id="title-text-56574234" className="flex-none">
        <h3 className="text-white text-4xl font-poppins font-bold uppercase tracking-widest p-2">
          {title}
        </h3>
      </div>
      <div
        id="line-separator-89g4u5gpuo894"
        className="flex-none w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
      ></div>
      <div id="description-text-56574234" className="flex-none">
        <h3 className="text-white/70 text-md font-lato tracking-wide p-2 text-center">
          <Typewriter
            options={{
              //   autoStart: true,
              delay: 20,
              deleteSpeed: 50,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                // .pauseFor(1500)
                .typeString(description)

                .start();
            }}
          />
        </h3>
      </div>
    </div>
  );
};
