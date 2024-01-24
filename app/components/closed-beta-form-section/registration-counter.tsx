import { getInterestsCount } from "@/app/utilities/vercel-db-utils";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export const RegistrationsCounter: React.FC = () => {
  const [count, setUpdateKey] = useState<number>(44906);

  const refreshCount = async () => {
    const newCount = await getInterestsCount();
    setUpdateKey(() => Number(44906 + Number(newCount)));
  };

  useEffect(() => {
    // Fetch data immediately on component mount
    refreshCount();
  
    // Set up the interval for fetching data every 5 seconds
    const interval = setInterval(() => {
      refreshCount();
    }, 5000); // 5 seconds interval
  
    // Clear the interval on component unmount
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
        <CountUp end={count} redraw={true} suffix="+" />
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
