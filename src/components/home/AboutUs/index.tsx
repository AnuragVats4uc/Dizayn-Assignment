import { fadeIn } from "@/utils/variant";
import { motion } from "framer-motion";
enum ABOUT {
  HEADING = "About us",
  DESCRIPTION = `We’re a full service creative agency, working globally with brands and
businesses at all stages of their journey.`,
}

const twc = {
  aboutContainer: "mt-[70px] px-8 md:w-3/5 md:ml-auto md:pl-60 md:pr-0",
  heading: "uppercase text-secondary text-base leading-[29px] font-medium ",
  blur: "hidden lg:flex lg:absolute lg:top-4 lg:left-0 lg:w-[175px] h-[100px] about-blur",
  description: "mt-[13px] text-black font-bold text-2xl leading-[44px]",
};

export const AboutUs = () => {
  return (
    <section id="about" className="relative">
      <div className={twc.aboutContainer}>
        <motion.h4
          className={twc.heading}
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          {ABOUT.HEADING}
        </motion.h4>
        <motion.p
          className={twc.description}
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          {ABOUT.DESCRIPTION}
        </motion.p>
      </div>
      <div className={twc.blur} />
    </section>
  );
};
