import Image from "next/image";
import React from "react";
import { RightArrow } from "../../icons/RightArrow";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import { GradientText } from "@/components/gradientText";

type ProjectDataProps = {
  img: string;
  alt: string;
  heading: string;
  description: string;
  cta: string;
};

type ProjectsProps = {
  projects: ProjectDataProps[];
};

const twc = {
  projectSection: "pl-6 pr-5 pb-20",
  projectHeading:
    "text-black font-semibold text-4xl leading-[56px] text-center",
  imageContainer:
    "w-full mt-10 md:flex md:flex-row-reverse md:justify-between md:items-center",
  image: "w-full md:w-[45%] h-[238px] rounded-xl",
  heading: "mt-4 text-senary font-medium text-xl leading-[44px",
  description: "text-secondary font-medium text-base leading-7 mt-5",
  button:
    "mt-4 capitalize flex items-center justify-center bg-septenary text-octonary px-6 py-2.5 outline-none rounded-[5px]",
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="product" className={twc.projectSection}>
      <motion.h1
        className={twc.projectHeading}
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
      >
        Our{" "} <GradientText text="Projects" className="text font-Moneta inline-block font-bold" />
      </motion.h1>
      <div className="mt-[88px]">
        {projects?.map((project: ProjectDataProps, i: number) => (
          <div className={twc.imageContainer} key={i}>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className={twc.image}
            >
              <Image
                src={project.img}
                alt={project.alt}
                width={100}
                height={238}
                className="w-full h-full object-cover  rounded-xl"
              />
            </motion.div>

            <div className="md:w-[45%]">
              <motion.h3
                className={twc.heading}
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
              >
                {project.heading}
              </motion.h3>
              <motion.p
                className={twc.description}
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
              >
                {project.description}
              </motion.p>
              <motion.button
                className={twc.button}
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
              >
                {project.cta} <RightArrow />
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
