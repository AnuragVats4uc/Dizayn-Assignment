import React from "react";
import { motion } from "framer-motion";
import { Card } from "../Card";
import { fadeIn } from "@/utils/variant";

enum Cards {
  imageWebDevelopment = "/images/web-development.png",
  altWebDevelopment = "web-development",
  headingWebDevelopment = "Web Development",
  imageLinearWebDevelopment = "/images/web-development-linear.png",
  descriptionWebDevelopment = "Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.",
  imageAppDesign = "/images/app-design.png",
  altAppDesign = "app-design",
  headingAppDesign = "App Design & Development",
  imageLinearAppDesign = "/images/app-design-linear.png",
  descriptionAppDesign = "Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.",
  imageUIUX = "/images/ui-ux.png",
  altUIUX = "ui-ux",
  headingUIUX = "UI/UX Design",
  imageLinearUIUX = "/images/ui-ux-linear.png",
  descriptionUIUX = "Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.",
  serviceHeading = "Our Services",
  description = " Bring the world to your door with our Best in class services",
}

const cardData = [
  {
    img: Cards.imageWebDevelopment,
    alt: Cards.altWebDevelopment,
    heading: Cards.headingWebDevelopment,
    description: Cards.descriptionWebDevelopment,
    imgLinear: Cards.imageLinearWebDevelopment,
  },
  {
    img: Cards.imageAppDesign,
    alt: Cards.altAppDesign,
    heading: Cards.headingAppDesign,
    description: Cards.descriptionAppDesign,
    imgLinear: Cards.imageLinearAppDesign,
  },
  {
    img: Cards.imageUIUX,
    alt: Cards.altUIUX,
    heading: Cards.headingUIUX,
    description: Cards.descriptionUIUX,
    imgLinear: Cards.imageLinearUIUX,
  },
];

const twc = {
  serviceSection: "mt-[100px] lg:mt-[250px] px-7 pb-20 relative",
  headingsContainer: "lg:w-1/2 lg:pr-28 xl:pr-64",
  headingFirst: "text-secondary uppercase font-Inter text-base leading-[29px]",
  description: "text-xl leading-[32px] font-bold",
  blur: "hidden lg:flex absolute -top-[6.5rem] left-40 services-blur w-[217px] h-[300px]",
};

export const Services = () => {
  return (
    <section id="service" className={twc.serviceSection}>
      <div className={twc.headingsContainer}>
        <motion.h6
          className={twc.headingFirst}
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          {Cards.serviceHeading}
        </motion.h6>
        <motion.h3
          className={twc.description}
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          {Cards.description}
        </motion.h3>
      </div>
      <div className="mt-5">
        <Card cards={cardData} />
      </div>
      <div className={twc.blur} />
    </section>
  );
};
