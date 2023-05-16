import Image from "next/image";
import React from "react";
import { ProductArrowRight } from "../../icons/ProductArrowRight";

type ProductCardProps = {
  heading: string;
  description: string;
  isActiveIndex: number;
};

enum PRODUCT_CARD {
  IMAGE = "/images/product-first.png",

  ALT = "product-first",
}

const twc = {
  productSection: "mt-9 lg:mt-0 product-card px-4 py-3.5 rounded-2xl",
  description: "mt-1 text-nonary text-base leading-6 tracking-[0.03em]",
  image: "w-full object-cover",
  heading: "text-black font-Inter font-semibold text-xl leading-6 pt-4",
};

export const ProductCard = ({ heading, description }: ProductCardProps) => {
  return (
    <section className={twc.productSection}>
      <Image
        src={PRODUCT_CARD.IMAGE}
        alt={PRODUCT_CARD.ALT}
        width={100}
        height={100}
        className={twc.image}
      />
      <div className="flex items-center">
        <div className="w-5/6">
          <p className={twc.heading}>{heading}</p>
          <p className={twc.description}>{description}</p>
        </div>
        <div className="w-1/6 mt-8 pl-4">
          <ProductArrowRight />
        </div>
      </div>
    </section>
  );
};
