import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Does ScoreKount affect my PC or mobile resources/FPS/etc.?",
    answer:
      "If you can run your game, you can run ScoreKount. It uses minimal resources, less than some games, and won't require changing your game settings.",
  },

  {
    question:
      "What do I need to know before playing on a 3rd party game account?",
    answer:
      "Before playing on a 3rd party game account, remember:\n You can't play on a smurf account.\n You can't play on someone else's account.\n You can't share your account. \nYou can have only one game account per game, matching your skill level's rank.",
  },
  {
    question: "What does it cost me?",
    answer:
      "ScoreKount is free. Your only shared information is your gaming activity. ScoreKount is P2RR—Play to redeem rewards, not P2P or F2P.",
  },
  {
    question: "How does ScoreKount track my game data?",
    answer:
      "ScoreKount uses two methods: \n For PC games, it uses APIs or plugins from game publishers. APIs allow direct access to data via Steam or Riot IDs, while plugins fetch stats automatically.\n For mobile games with limited APIs, OCR technology captures intermittent screenshots to create a real-time gamer database.",
  },
  {
    question: "How do I set up my ScoreKount wallet?",
    answer:
      "Upon signing up, ScoreKount creates a non-custodial wallet for each user in the backend. This wallet aggregates achievements and gaming identity blockchain, creating an on-chain gamer reputation system benefiting brands and games.",
  },
  {
    question: "How are the leaderboards implemented?",
    answer:
      "ScoreTBL stands for The Best Leaderboards for a reason. We have an extensive backend to Track, Analyze, and View ALL games EVER played with ScoreKount. These aren’t your grandpa’s leaderboards with one gigantic high scores list. These leaderboards provide each game with daily, weekly, monthly lists with filters for age range, games played, % win/lose, challenges accepted, ranking up or down by points, location, and a dozen other stats you can filter to your highest competitive interests.",
  },
  {
    question: "How does challenging work?",
    answer:
      "Challenging is as easy as finding the player on a leaderboard and pressing the challenge button next to their name or going to a game, selecting rules, invite time limit and getting a code you can send to any friend via text, email, or directly to ANY player on ScoreKount. If they respond to your invite before the time limit you set then it’s GAME ON! All starts and end results will be recorded to ScoreTBL and if you bail and chicken out... that’ll be recorded too!",
  },
];

export const FAQCardsFlexBox: React.FC = () => {
  return (
    <div
      id="faq-container-85324324"
      className="w-full max-w-[90vw] flex flex-col items-start justify-start px-4 gap-y-4"
    >
      {faqs.map((e, i) => (
        <FAQFlexItem question={e.question} answer={e.answer} key={i} />
      ))}
    </div>
  );
};

const FAQFlexItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  return (
    <div
      id="faq-item-29735694"
      className="flex flex-col items-start justify-start w-full pb-2 border-b border-white cursor-pointer"
      onClick={() => setIsCollapsed((prev) => !prev)}
    >
      <div
        id="flex-item-question"
        className="flex items-center justify-between w-full"
      >
        <h3
          id="faq-question-text-927658245"
          className="text-lg lg:text-2xl font-lato font-bold text-white"
        >
          {question}
        </h3>
        <span className="material-symbols-outlined text-white">
          {isCollapsed ? "expand_more" : "expand_less"}
        </span>
      </div>
      <motion.div
        id="flex-item-answer"
        initial="collapsed"
        animate={isCollapsed ? "collapsed" : "open"}
        variants={variants}
        transition={{ duration: 0.8 }}
        className="overflow-hidden"
      >
        <div
          id="flex-item-answer"
          className="flex items-start justify-start w-full"
        >
          <p
            id="faq-answer-text-927658245"
            className="text-md lg:text-l font-lato font-light text-gray-300"
          >
            {answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FAQCardsGrid: React.FC = () => {
  return (
    <div
      id="faq-section-cont-872364452"
      className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-[5%]"
    >
      {faqs.map((faq) => (
        <FAQCard
          key={faq.question}
          index={faqs.indexOf(faq)}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

const FAQCard: React.FC<{
  question: string;
  answer: string;
  index: number;
}> = ({ question, answer, index }) => {
  const bkgcolor = index % 2 === 0 ? "bg-yellow-300" : "bg-blue-800";
  const leftBorderColor =
    index % 2 === 0 ? "border-red-300" : "border-blue-200";
  const questionBlockBkgColor =
    index % 2 === 0 ? "bg-black bg-opacity-30" : "bg-black bg-opacity-30";
  return (
    <div
      id={`faq-card-cont-${index}`}
      className={`flex flex-col items-start justify-start p-3 rounded-tr-[40px] shadow-lg transform transition duration-500 hover:scale-105 ${bkgcolor} bg-opacity-80 relative`}
    >
      <div
        id="circuit-board-pattern-8273645"
        className="absolute inset-0 cust-pattern-1-circuit-board opacity-40 rounded-tr-[40px]"
      ></div>
      <h3
        id={`faq-card-question-${index}`}
        className={`w-full text-xl lg:text-2xl text-white font-bold border-l-4 pl-2 ${leftBorderColor} rounded-tr-[40px] pr-5 py-2 ${questionBlockBkgColor}`}
      >
        {question}
      </h3>
      <div
        id="horizontal-line"
        className="flex-none h-[2px] w-full mb-[10px]"
        style={{
          background:
            "linear-gradient(to right, transparent, white, transparent)",
        }}
      ></div>
      {/* <div id="vertical-spacer" className="flex-none h-[5px]"></div> */}
      <p
        id={`faq-card-answer-${index}`}
        className="text-md lg:text-l text-white font-light font-lato tracking-wide"
      >
        {answer}
      </p>
    </div>
  );
};
