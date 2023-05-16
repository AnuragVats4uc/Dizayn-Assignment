import React, { useState } from "react";
import Image from "next/image";
import { LinearGradientCard } from "../LinearGradientCard";
import { ChevronDown } from "@/components/icons/ChevronDown";
import cn from "classnames";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import { ChevronLeft } from "@/components/icons/ChevronLeft";

type ServicesCardProps = {
  img: string;
  alt: string;
  heading: string;
  description: string;
  imgLinear: string;
};

type ServiceProps = {
  cards: ServicesCardProps[];
};

const twc = {
  activeItemContainer: "mt-3.5 lg:pl-[75px] lg:overflow-hidden hidden lg:block",
  activeItemDescription:
    "text-quinary text-sm font-medium not-italic leading-[26px] mt-[3px]",
  cardContainer:
    "rounded-2xl pt-6 pl-[19px] pr-[9px] pb-[12px] mt-20 lg:mt-10 w-full card-sm",
  outerContainer: "lg:flex lg:justify-between lg:items-center",
  innerContainer: "lg:flex lg:items-center",
  imageContainer: "text w-14 h-14 p-3 card-icon lg:flex",
  image: "text-black opacity-100",
  heading: "text-xl mt-3.5 lg:mt-0 text-tertiary leading-[32px] font-bold",
  descriptionContainer: "mt-3.5 lg:pl-[75px] lg:overflow-hidden lg:hidden",
  description:
    "text-quinary text-sm font-medium not-italic leading-[26px] mt-[3px]",
  mainContainer: "lg:flex lg:justify-between",
  itemContainer: "w-full lg:w-[42%]",
  gradientContainer: "hidden lg:block lg:w-[42%]",
};

export const Card = ({ cards }: ServiceProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onItemClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const rendererdItems = cards.map((card, index) => {
    const active = index == activeIndex;
    const content = active && (
      <motion.div
        className={twc.activeItemContainer}
        key={index}
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
      >
        <p className={twc.activeItemDescription}>{card.description}</p>
      </motion.div>
    );
    return (
      <>
        <motion.section
          className={cn(twc.cardContainer,{
            card: active,
          })}
          key={index}
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className={twc.outerContainer}>
            <div className={twc.innerContainer}>
              <motion.div
                className={twc.imageContainer}
                variants={fadeIn("left", 0.8)}
                initial="hidden"
                whileInView={"show"}
              >
                <Image
                  src={card.img}
                  width={32}
                  height={32}
                  alt={card.alt}
                  className={twc.image}
                />
              </motion.div>
              <motion.div
                className="lg:ml-5"
                variants={fadeIn("right", 0.8)}
                initial="hidden"
                whileInView={"show"}
              >
                <h5 className={twc.heading}>{card.heading}</h5>
              </motion.div>
            </div>
            {active ? (
              <ChevronDown onClick={() => onItemClick(index)} />
            ) : (
              <ChevronLeft onClick={() => onItemClick(index)} />
            )}
          </div>
          <motion.div
            className={twc.descriptionContainer}
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
          >
            <p className={twc.description}>{card.description}</p>
          </motion.div>
          {content}
        </motion.section>
        <div className="lg:hidden">
          <LinearGradientCard img={card.imgLinear} alt={card.alt} />
        </div>
      </>
    );
  });

  return (
    <div className={twc.mainContainer}>
      <div className={twc.itemContainer}>{rendererdItems}</div>
      <div className={twc.gradientContainer}>
        {cards.map((card, i) => {
          const active = i === activeIndex;
          return (
            <div key={i}>
              {active && (
                <LinearGradientCard img={card.imgLinear} alt={card.alt} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
