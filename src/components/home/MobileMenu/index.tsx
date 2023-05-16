import Image from "next/image";
import React, { useEffect, useState } from "react";
import cn from "classnames";
import { HEADER } from "@/components/header";
import { FOOTER } from "@/components/footer";
import { Link } from "react-scroll";

type MobileMenuProps = {
  isOpen: boolean;
  onClick: () => void;
};

const twc = {
  menuContainer: "fixed w-screen top-0 bg-[rgba(0,0,0,0.2)] overflow-hidden",
  innerContainer: "mb-[117px] rounded-b-[25px] bg-denary",
  labelContainer:
    "flex flex-col justify-center items-center pt-[105px] space-y-10",
  label: "list-none font-Archivo text-base leading-4 text-secondary pb-2",
  copyRight:
    "text-sm text-secondary leading-6 font-medium tracking-[1.25px] text-center mt-11",
  iconContainer: "flex space-x-6 justify-center mt-[140px]",
};

const MobileMenu = ({ isOpen, onClick }: MobileMenuProps) => {
  return (
    <div
      className={cn(twc.menuContainer, {
        "animated-section": isOpen,
        "animated-section closing": !isOpen,
      })}
    >
      <div className={twc.innerContainer}>
        <ul className={twc.labelContainer}>
          <Link
            to="first"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className={cn(twc.label, {
              "animated-text": isOpen,
            })}
            value="home"
            onClick={onClick}
          >
            {HEADER.HOME}
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            offset={-200}
            className={cn(twc.label, {
              "animated-text": isOpen,
            })}
            value="about"
            onClick={onClick}
          >
            {HEADER.ABOUT}
          </Link>
          <Link
            to="service"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className={cn(twc.label, {
              "animated-text": isOpen,
            })}
            value={"services"}
            onClick={onClick}
          >
            {HEADER.SERVICE}
          </Link>
          <Link
            to="products"
            smooth={true}
            activeClass="active"
            spy={true}
            offset={-200}
            className={cn(twc.label, {
              "animated-text": isOpen,
            })}
            value={"products"}
            onClick={onClick}
          >
            {HEADER.PRODUCTS}
          </Link>
        </ul>
        <div className={twc.iconContainer}>
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
        <div className="mt-8 pb-[70px]">
          <p className={twc.copyRight}>{FOOTER.COPYRIGHT}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
