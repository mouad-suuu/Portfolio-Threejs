import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingAnimation = ({
  text,
  speed = 150,
  className = "",
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setDisplayedText(""); // Reset text when component mounts
    let index = 0;

    const typeText = () => {
      const intervalId = setInterval(() => {
        if (!isMounted) return;

        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, speed);

      return intervalId;
    };

    const intervalId = typeText();

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [text, speed]);

  return (
    <h1
      className={`
      text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
      font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16
      transition-all duration-300
      ${className}
    `}
    >
      {displayedText}
      {isTyping && (
        <span className="animate-pulse ml-0.5 sm:ml-1 inline-block">|</span>
      )}
    </h1>
  );
};

export default TypingAnimation;
