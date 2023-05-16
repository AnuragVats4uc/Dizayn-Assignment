import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import { GradientText } from "@/components/gradientText";

enum FIRST {
  HEADING = ` We’ll build the website and App of your`,
  DESCRIPTION = `Best quality/price ratio in the industry • Fast, Responsive & Animated
  Mobile and Web Apps • Unbeatable Prices`,
  DREAM = "Dream",
}

const twc = {
  container: "mt-20 relative",
  heading:
    "text-center font-bold text-4xl leading-[58px] px-10 md:px-36 lg:px-48 xl:px-80 2xl:px-[450px]",
  gradientHeading:
    "block md:inline-block text-center mt-0 font-bold text-5xl md:relative md:top-1 leading-[58px] text font-Moneta",
  blur: "hidden lg:flex lg:absolute lg:top-0 lg:left-20 2xl:left-60 lg:w-[175px] lg:h-[100px] first-blur",
  description:
    "text-center font-Inter text-secondary mt-5 md:mt-0 text-base leading-[29px] tracking-[0.03em] px-[18px] md:px-[170px] lg:px-[204px] xl:px-[360px] 2xl:px-[500px]",
};

const First = () => {
  return (
    <div id="first" className={twc.container}>
      <motion.h1
        className={twc.heading}
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
      >
        {FIRST.HEADING}{" "}
        <GradientText className={twc.gradientHeading} text={FIRST.DREAM} />
      </motion.h1>

      <motion.p
        className={twc.description}
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
      >
        {FIRST.DESCRIPTION}
      </motion.p>
      <div className={twc.blur} />
    </div>
  );
};

export default First;
