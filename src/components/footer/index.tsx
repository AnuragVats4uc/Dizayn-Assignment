import React from "react";
import { HeaderLogo } from "../icons/headerLogo";
import Image from "next/image";
import cn from "classnames";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";

export enum FOOTER {
  HEADING = "Logo Design",
  COMPANY = "Company",
  ABOUT = "ABOUT US",
  SERVICE = "Service",
  OUR_WORK = "Our Work",
  COPYRIGHT = "Copyright ©2023 Lorem Ipsome",
  FACEBOOK_LINK = "/images/facebook.png",
  FACEBOOK = "facebook",
  TWITTER_LINK = "/images/twitter.png",
  TWITTER = "twitter",
  INSTAGRAM_LINK = "/images/instagram.png",
  INSTAGRAM = "instagram",
}

const twc = {
  footerContainer: "footer-linear pt-16 pb-12 px-12 md:px-20",
  flexContainer: "md:flex md:justify-between md:items-center",
  logoContainer: "flex justify-center items-center space-x-4",
  headingLabel:
    "text-sm text-black leading-6 uppercase font-medium tracking-[1.25px]",
  linksContainer:
    "mt-8 md:mt-0 grid grid-cols-2 md:grid-cols-4 gap-10 justify-between",
  borderLine: "border border-[#8140F7] opacity-20 mt-[50px]",
  socialIconContainer: "md:flex md:justify-between md:items-center",
  icons: "flex gap-10 mt-12 justify-center",
  copyrightLabel:
    "text-sm text-secondary leading-6 font-medium tracking-[1.25px] text-center mt-11",
};

export const Footer = () => {
  return (
    <footer className={twc.footerContainer}>
      <div className={twc.flexContainer}>
        <motion.div
          className={twc.logoContainer}
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          <HeaderLogo />
          <h6 className={twc.headingLabel}>{FOOTER.HEADING}</h6>
        </motion.div>
        <motion.div
          className={twc.linksContainer}
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          <p className={twc.headingLabel}>{FOOTER.COMPANY}</p>
          <p className={cn(twc.headingLabel, "text-right")}>{FOOTER.ABOUT}</p>
          <p className={twc.headingLabel}>{FOOTER.SERVICE}</p>
          <p className={cn(twc.headingLabel, "text-right")}>
            {FOOTER.OUR_WORK}
          </p>
        </motion.div>
      </div>
      <motion.hr
        className={twc.borderLine}
        variants={fadeIn("up", 0.3,0.2)}
        initial="hidden"
        whileInView={"show"}
      />
      <motion.div
        className={twc.socialIconContainer}
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
      >
        <div className={twc.icons}>
          <Image
            src={FOOTER.FACEBOOK_LINK}
            alt={FOOTER.FACEBOOK}
            width={36}
            height={36}
          />
          <Image
            src={FOOTER.INSTAGRAM_LINK}
            alt={FOOTER.INSTAGRAM}
            width={36}
            height={36}
          />
          <Image
            src={FOOTER.TWITTER_LINK}
            alt={FOOTER.TWITTER}
            width={36}
            height={36}
          />
        </div>
        <p className={twc.copyrightLabel}>{FOOTER.COPYRIGHT}</p>
      </motion.div>
    </footer>
  );
};
