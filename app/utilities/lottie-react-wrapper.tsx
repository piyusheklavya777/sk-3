import React from "react";
import Lottie from "lottie-react";

export const LottieAnimation: React.FC<{
  lottiejsonfile: any;
}> = ({ lottiejsonfile }) => (
  <Lottie animationData={lottiejsonfile} loop={true} />
);
