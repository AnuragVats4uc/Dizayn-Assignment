import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";

type LinearGradientCardProps = {
  img: string;
  alt: string;
};

const twc = {
  gradientSection: "w-full flex flex-col items-end  relative h-full mt-[29px]",
  gradientContainer:
    "w-[85%] linear-gradient h-[426px] lg:h-[624px] rounded-[8px] relative",
  gradientImage: "absolute top-0 my-11 lg:my-[55px] w-[90%] h-[80%] left-0",
};

export const LinearGradientCard = ({ img, alt }: LinearGradientCardProps) => {
  return (
    <>
      <motion.section
        className={twc.gradientSection}
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView={"show"}
      >
        <div className={twc.gradientContainer} />
        <Image
          src={img}
          alt={alt}
          width={100}
          height={100}
          className={twc.gradientImage}
        />
      </motion.section>
    </>
  );
};
