import React from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "@/utils/variant";

type GradientTextProps = {
  text: string;
  className: string;
  direction?: string;
  delay?: number;
  gradientContainerClassName?: string;
};

export const GradientText = ({
  text,
  className,
  direction,
  delay,
  gradientContainerClassName,
}: GradientTextProps) => {
  return (
    <>
      {text && className && direction && delay && (
        <motion.div
          variants={fadeIn(direction || "", delay || 0)}
          initial="hidden"
          whileInView={"show"}
          className={gradientContainerClassName}
        >
          <span className={className}>{text}</span>
        </motion.div>
      )}
      {text && className && !direction && !delay && (
        <motion.span className={className}>{text}</motion.span>
      )}
    </>
  );
};
