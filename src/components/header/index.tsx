import React from "react";
import { HeaderLogo } from "../icons/headerLogo";
import { HamburgerIcon } from "../icons/hamburgerIcon";
import { CloseMenuIcon } from "../icons/CloseMenuIcon";
import { Link } from "react-scroll";
import cn from 'classnames'
import Button from "../button";

export enum HEADER {
  HOME = "Home",
  ABOUT = "About",
  SERVICE = "Services",
  PRODUCTS = "Our Products",
  BUTTON_LABEL = "Contact Us",
}

type HeaderProps = {
  handleMenuOpen: any;
  handleMenuClose: any;
  isOpenMenu: boolean;
};

const twc = {
  headerContainer: "left-0 flex justify-between items-center py-8 px-7",
  itemsContainer: "hidden lg:flex list-none flex gap-7",
  labels: "font-Archivo text-base leading-[17px] text-secondary pb-2",
  button:
    "hidden lg:inline-block rounded-[4px] py-2.5 px-6 text-white font-Archivo tex-base leading-[17px] tracking-[0.03em] view-all",
};

export const Header = ({
  handleMenuOpen,
  isOpenMenu,
  handleMenuClose,
}: HeaderProps) => {
  return (
    <header className="w-full">
      <div className={twc.headerContainer}>
        <HeaderLogo />
        <ul className={twc.itemsContainer}>
          <Link
            to="first"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className={twc.labels}
          >
            {HEADER.HOME}
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className={twc.labels}
          >
            {HEADER.ABOUT}
          </Link>
          <Link
            to="service"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className={twc.labels}
          >
            {HEADER.SERVICE}
          </Link>
          <Link
            to="service"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className={twc.labels}
          >
            {HEADER.PRODUCTS}
          </Link>
        </ul>
        {!isOpenMenu && <HamburgerIcon onClick={handleMenuOpen} />}
        {isOpenMenu && <CloseMenuIcon onClick={handleMenuClose} />}
        <Button text={HEADER.BUTTON_LABEL} className={twc.button}  />
      </div>
    </header>
  );
};
