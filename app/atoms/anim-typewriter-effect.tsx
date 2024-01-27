import { useState, useCallback } from "react";

export const useTypewriter = ({
  text,
  delaybetweencharacters,
}: {
  text: string;
  delaybetweencharacters: number;
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);
  let currentCharIndex = 0;

  const startTyping = useCallback(() => {
    if (isTyping) return; // Prevent multiple triggers
    setIsTyping(true);

    const typeChar = () => {
      if (currentCharIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(currentCharIndex));
        currentCharIndex++;
        setTimeout(typeChar, delaybetweencharacters);
      } else {
        setIsTyping(false); // Typing completed
      }
    };

    typeChar();
  }, [text, delaybetweencharacters, isTyping]);

  return { displayedText, startTyping };
};
