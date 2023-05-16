import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  text: string;
  className: string;
  onClick?: () => void;
  direction?: string;
  delay?: number;
};

const Button = ({
  text,
  onClick,
  className,
  delay,
  direction,
}: ButtonProps) => {
  return (
    <>
      {text && className && !delay && !direction && (
        <button className={className} onClick={onClick}>
          {text}
        </button>
      )}
      {text && className && delay && direction && (
        <motion.button className={className} onClick={onClick}>
          {text}
        </motion.button>
      )}
    </>
  );
};

export default Button;
