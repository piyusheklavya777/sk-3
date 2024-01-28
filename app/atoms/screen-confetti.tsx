import Confetti from "react-confetti";
import { useConfettiStore } from "../zustand/confetti.store";
import { useEffect } from "react";

export const ScreenConfetti: React.FC = () => {
  const { confetti, unsetConfetti } = useConfettiStore();

  // unset the confetti after expiresIn milliseconds
  useEffect(() => {
    if (confetti) {
      const expiresIn =
        confetti.duration === "match-message" ? 8000 : confetti.duration;
      setTimeout(() => {
        unsetConfetti();
      }, expiresIn);
    }
  }, [confetti, unsetConfetti]);

  if (!confetti) {
    return <></>;
  }
  return (
    <div id="confetti-screen-cont-nu9p3wgi4re" className="fixed inset-0">
      {confetti && (
        <Confetti
          numberOfPieces={confetti.numberOfPieces}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
    </div>
  );
};
