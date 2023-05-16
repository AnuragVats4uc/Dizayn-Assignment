import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import { useInView } from "react-intersection-observer";
import { GradientText } from "@/components/gradientText";
import Button from "@/components/button";

enum PRODUCT {
  LABEL = "We have made some of the best ",
  HEADING = "Products",
  BUTTON_LABEL = " View All",
}

const twc = {
  productSection: "mt-[145px] lg:mt-0",
  productLabel: "font-Archivo text-base font-normal leading-[29px] text-nonary",
  heading: "text text-6xl leading-[58px] font-Moneta mt-2.5 font-bold",
  button:
    "flex justify-center items-center text-white text-sm leading-6 font-Inter py-2.5 view-all rounded-[4px] px-10 mt-9 cursor-pointer",
};

export const Products = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section id="products" className={twc.productSection}>
      <div className="mx-8">
        <motion.p
          className={twc.productLabel}
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          {PRODUCT.LABEL}
        </motion.p>
        <GradientText
          className={twc.heading}
          text={PRODUCT.HEADING}
          direction="right"
          delay={0.3}
        />
        <Button
          text={PRODUCT.BUTTON_LABEL}
          className={twc.button}
          direction="right"
          delay={0.3}
        />
      </div>
    </section>
  );
};
