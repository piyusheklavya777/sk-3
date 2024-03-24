import { getInterestsCount } from "@/app/utilities/vercel-db-utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export const RegistrationsCounter: React.FC<{
  refreshSignal: boolean;
}> = ({
  refreshSignal,
}) => {
  const [count, setUpdateKey] = useState<number>(44906);

  const [bogusSignal, setBogusSignal] = useState<boolean>(true);

 

  useEffect(() => {
    const refreshCount = async () => {
      const newCount = await getInterestsCount();
      setUpdateKey(() => Number(44906 + Number(newCount)));
    };
    refreshCount();
  }, [refreshSignal]);

  useEffect(() => {
    // Fetch data immediately on component mount
    // refreshCount();

    // Set up the interval for fetching data every 5 seconds
    const interval = setInterval(() => {
      setBogusSignal((prev) => !prev);
      // if (bogusSignal) { // just to make the api calls every alternate count
      //   refreshCount();
      // }
    }, 5000); // 5 seconds interval

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="reg-counter-section-overall-cont"
      className="relative w-full py-20"
    >
      <div
        id="closed-beta-registrations-counter-8273645"
        className="relative z-20 flex flex-col items-center justify-start gap-y-2 p-4 rounded-[16px]"
      >
        <p
          id="closed-beta-registrations-counter-text-8273645"
          className="text-white tracking-widest text-8xl lg:text-12xl"
          style={{
            fontFamily: "calculator",
          }}
        >
          <CountUp end={count} redraw={true} suffix="+" />
        </p>
        <div
          id="separator-76345748"
          className="flex-none w-full h-[2px] bg-gradient-to-r from-transparent via-[#c2bdff] to-transparent"
        ></div>
        <p
          id="closed-beta-registrations-counter-text-8273645"
          className="text-[#c2bdff] font-lato tracking-widest text-xl lg:text-3xl"
        >
          REGISTRATIONS
        </p>
      </div>
      {/* absolutes */}
      <div
        id="map-bkg-guy3rwobr"
        className="absolute z-10 inset-0  bg-fit filter blur-[1px] opacity-[40%]"
      >
        {/* svg: world-map-outline.svg filled with #c2bdff. use next/image */}
        <Image
          src="/world-map-outline.svg"
          alt="world-map-outline"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          className="filter hue-rotate-[10] saturate-[20]"
        />
      </div>
    </div>
  );
};
