import { useEffect, useState } from "react";
import CountUp from "react-countup";

export const RegistrationsCounter: React.FC = () => {
  const [, setUpdateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the key to trigger a re-render
      setUpdateKey((prevKey) => prevKey + 1);
    }, 10000); // 10 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="closed-beta-registrations-counter-8273645"
      className="flex flex-col items-center justify-start gap-y-2 p-4 rounded-[16px]"
    >
      <p
        id="closed-beta-registrations-counter-text-8273645"
        className="text-gray-200 font-lato tracking-widest text-4xl lg:text-6xl"
      >
        <CountUp end={44906} redraw={true} suffix="+" />
      </p>
      <div
        id="separator-76345748"
        className="flex-none w-full h-[2px] bg-gradient-to-r from-transparent via-[#c2bdff] to-transparent"
      ></div>
      <p
        id="closed-beta-registrations-counter-text-8273645"
        className="text-[#c2bdff] font-lato tracking-widest text-3xl lg:text-3xl"
      >
        REGISTRATIONS
      </p>
    </div>
  );
};