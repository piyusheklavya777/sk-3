// cloosed beta form section

import { BetaRegistrationForm } from "./registration-form";
import { JoinDiscordButton } from "./join-discord-button";

export const ClosedBetaSection: React.FC = () => {
  return (
    <div
      id="closed-beta-section-lnjrknjs"
      className="flex flex-col items-center justify-center gap-y-2"
    >
      <div id="closed-beta-title-cont-895423vfe" className="flex-none">
        {/* <h1 className=" font-lato text-lg lg:text-4xl bg-clip-to-text bg-gradiento-to-b from-transparent via-white to-transparent"> */}
        <h1 className=" font-lato text-lg text-[#c2bdff]/90 tracking-widest">
          ACCEPTING INTERESTS NOW
        </h1>
      </div>
      <div
        id="closed-beta-content-vnjlrwvw"
        className="flex flex-col js ic gap-y-2"
      >
        <div id="beta-reg-form-caller-3645437" className="flex-none">
          <BetaRegistrationForm />
        </div>
        <div id="separator-76345748" className="flex-none w-full h-[5px]"></div>
        <div id="join-discord-button" className="flex-none">
          <JoinDiscordButton />
        </div>
        {/* <div id="separator-76345748" className="flex-none w-full h-[5px]"></div>
        <div id="registrations-counter" className="flex-none">
          <RegistrationsCounter />
        </div> */}
      </div>
    </div>
  );
};
