import React, { useEffect, useState } from "react";
import { Box } from "../Box";
import { CustomerBoxIcon } from "../../icons/customBoxIcon";
import { CustomerBoxIconSecond } from "../../icons/customerBoxIconSecond";
import { CustomerBoxIconThird } from "../../icons/CustomerBoxIconThird";
import { CustomerBoxIconSeventh } from "../../icons/CustomerBoxIconSeventh";
import { CustomerBoxIconNinth } from "../../icons/CustomerBoxIconNinth";
import { CustomerBoxIconTenth } from "../../icons/CustomerBoxIconTenth";
import { CustomerBoxIconEleventh } from "../../icons/CustomerBoxIconEleventh";
import cn from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import { GradientText } from "@/components/gradientText";

const data = [
  {
    icon: <CustomerBoxIcon />,
  },
  {
    icon: <CustomerBoxIconSecond />,
  },
  {
    icon: <CustomerBoxIconThird />,
  },
  {
    icon: (
      <Image
        src="/images/customer-icon-5.png"
        alt="customer"
        width={100}
        height={100}
        className="object-contain w-[26px] h-[17px]"
      />
    ),
  },
  {
    icon: (
      <Image
        src="/images/customer-icon-4.png"
        alt="customer"
        width={100}
        height={100}
        className="object-contain w-[26px] h-[17px]"
      />
    ),
  },
  {
    icon: (
      <Image
        src="/images/customer-icon-6.png"
        alt="customer"
        width={100}
        height={100}
        className="object-contain w-[26px] h-[17px]"
      />
    ),
  },
  {
    icon: <CustomerBoxIconSeventh />,
  },
  {
    icon: (
      <Image
        src="/images/customer-icon-8.png"
        alt="customer"
        width={100}
        height={100}
        className="object-contain w-[26px] h-[17px]"
      />
    ),
  },
  {
    icon: <CustomerBoxIconNinth />,
  },
  {
    icon: <CustomerBoxIconTenth />,
  },
  {
    icon: <CustomerBoxIconEleventh />,
  },
  {
    icon: (
      <Image
        src="/images/customer-icon-10.png"
        alt="customer"
        width={100}
        height={100}
        className="object-contain w-[26px] h-[17px]"
      />
    ),
  },
];

enum CUSTOMER {
  MEET = "Meet out top-tier",
  HEADING = "Customers",
}

const twc = {
  container: "mt-[200px] px-8 mb-20",
  heading: "text-center text-black text-2xl leading-[56px] font-semibold",
  gradientHeading:
    "text  text-5xl leading-[80px] text-center font-Moneta font-bold block lg:inline-block",
  iconContainer: "flex justify-center gap-x-3 mt-[35px]",
  iconContainer2: "flex justify-center flex-wrap gap-x-3",
};

export const Customers = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  const row = isSmallScreen === true ? 3 : 5;
  console.log(isSmallScreen);

  const firstRow = data.slice(0, row);
  const remainingRow = data.slice(row, data.length - 1);
  return (
    <section className={twc.container}>
      <motion.h5
        className={twc.heading}
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
      >
        {CUSTOMER.MEET}{" "}
        <GradientText
          text={CUSTOMER.HEADING}
          className={twc.gradientHeading}
          direction="left"
          delay={0.3}
          gradientContainerClassName="block lg:inline-block relative -top-5 lg:top-1"
        />
      </motion.h5>

      <motion.div
        className={cn(twc.iconContainer, {})}
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
      >
        {firstRow.map((d, i) => (
          <Box key={i} icon={d.icon} />
        ))}
      </motion.div>
      <motion.div
        className={cn(twc.iconContainer2)}
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
      >
        {remainingRow.map((d, i) => (
          <Box key={i} icon={d.icon} />
        ))}
      </motion.div>
    </section>
  );
};
