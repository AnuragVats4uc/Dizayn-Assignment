import React from "react";
import First from "./first";
import { AboutUs } from "./AboutUs";
import Customers from "./Customer";
import { Services } from "./Services";
import { Projects } from "./Projects";
import { Products } from "./Products";

enum ProjectsData {
  imgCableVision = "/images/cable-vision.png",
  altCableVision = "cable-vision",
  headingCableVision = "Cable Vision",
  descriptionCableVision = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  ctaCableVision = "View Full Project",
  imageCableVisionSecond = "/images/cable-vision-2.png",
  imageCableVisionThird = "/images/cable-vision-3.png",
}

const projectsData = [
  {
    img: ProjectsData.imgCableVision,
    alt: ProjectsData.altCableVision,
    heading: ProjectsData.headingCableVision,
    description: ProjectsData.descriptionCableVision,
    cta: ProjectsData.ctaCableVision,
  },
  {
    img: ProjectsData.imageCableVisionSecond,
    alt: ProjectsData.altCableVision,
    heading: ProjectsData.headingCableVision,
    description: ProjectsData.descriptionCableVision,
    cta: ProjectsData.ctaCableVision,
  },
  {
    img: ProjectsData.imageCableVisionThird,
    alt: ProjectsData.altCableVision,
    heading: ProjectsData.headingCableVision,
    description: ProjectsData.descriptionCableVision,
    cta: ProjectsData.ctaCableVision,
  },
];

export const HomePage = () => {
  return (
    <div>
      <First />
      <AboutUs />
      <Products />
      <Customers />
      <Services />
      <Projects projects={projectsData} />
    </div>
  );
};
