import clsx from "clsx";
import classes from "./marquee.module.css";

interface MarqueeProps {
  words: string[];
  className?: string;
  animationDuration?: number; //seconds
}

export const Marquee: React.FC<MarqueeProps> = ({
  words,
  className,
  animationDuration = 7,
}) => {
  // Дублируем массив слов для бесшовной анимации
  const doubledWords = [...words, ...words];

  return (
    <div className={`overflow-hidden ${className || ""}`}>
      <div
        style={{
          animationDuration: `${animationDuration}s`,
        }}
        className={clsx(
          "flex w-fit whitespace-nowrap text-background",
          classes.marquee,
        )}
      >
        {doubledWords.map((word, index) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={`${index}mar`}
            className="mx-4 inline-block"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
