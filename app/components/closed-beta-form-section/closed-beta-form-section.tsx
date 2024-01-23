// cloosed beta form section

import { motion } from "framer-motion";

const theme = {
  colors: {
    primary: "#e3e0ff",
  },
};

const skin = "#c2bdff";

export const ClosedBetaSection: React.FC = () => {
  return (
    <div id="closed-beta-section" className="flex flex-col js ic">
      <div id="beta-reg-form-caller-3645437" className="flex-none">
        <BetaRegistrationForm />
      </div>

      <div id="registrations-counter" className="flex-none">
        <RegistrationsCounter />
      </div>
    </div>
  );
};

const BetaRegistrationForm: React.FC = () => {
  return (
    <div
      id="closed-beta-form-section-92403y980"
      className={`flex flex-col items-center justify-start gap-y-5 p-4 rounded-[16px] border-t-2 border-[#c2bdff]/60 bg-gradient-to-b from-[#03011c] to-transparent`}
    >
      <input
        type="text"
        placeholder="email"
        className="w-[300px] h-[50px] rounded-[5px] border-b-2 border-[#c2bdff]/60 text-[#c2bdff]/70 placeholder:text-[#c2bdff]/40 placeholder:italic font-lato p-2 outline-none bg-black/30"
      />
      <input
        type="text"
        placeholder="discord handle e.g. username#1234"
        className="w-[300px] h-[50px] rounded-[5px] border-b-2 border-[#c2bdff]/60 text-[#c2bdff]/70 placeholder:text-[#c2bdff]/40 placeholder:italic font-lato p-2 outline-none bg-black/30"
      />
      {/* code for a multiselect */}
      <div id="separator-76345748" className="flex-none w-full h-[80px]"></div>
      <motion.button
        animate={{ scale: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        id="closed-beta-form-submit-button-8273645"
        className="px-4 py-4 rounded-[5px] font-lato tracking-widest text-[#c2bdff]/90 text-sm border-b border-[#c2bdff]/60 p-2 outline-none bg-black/40 transition duration-500 ease-in-out"
      >
        JOIN CLOSED BETA
      </motion.button>
    </div>
  );
};

const RegistrationsCounter: React.FC = () => {
  return (
    <div
      id="closed-beta-registrations-counter-8273645"
      className="flex flex-col items-center justify-start gap-y-2 p-4 rounded-[16px]"
    >
      <p
        id="closed-beta-registrations-counter-text-8273645"
        className="text-gray-200 font-lato tracking-widest text-4xl lg:text-6xl"
      >
        44,906+
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
