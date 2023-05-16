import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AboutUs } from "@/components/home/AboutUs";
import { Customers } from "@/components/home/Customer";
import MobileMenu from "@/components/home/MobileMenu";
import { Products } from "@/components/home/Products";
import { Projects } from "@/components/home/Projects";
import { Services } from "@/components/home/Services";
import First from "@/components/home/first";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from "@/components/home/ProductCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";

enum ProjectsData {
  imgCableVision = "/images/cable-vision.png",
  altCableVision = "cable-vision",
  headingCableVision = "Cable Vision",
  descriptionCableVision = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  ctaCableVision = "View Full Project",
  imageCableVisionSecond = "/images/cable-vision-2.png",
  imageCableVisionThird = "/images/cable-vision-3.png",
  headingLimbic = "Limbic",
  headingBeauty = "GXVE Beauty by Gwen Stefany",
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
    heading: ProjectsData.headingLimbic,
    description: ProjectsData.descriptionCableVision,
    cta: ProjectsData.ctaCableVision,
  },
  {
    img: ProjectsData.imageCableVisionThird,
    alt: ProjectsData.altCableVision,
    heading: ProjectsData.headingBeauty,
    description: ProjectsData.descriptionCableVision,
    cta: ProjectsData.ctaCableVision,
  },
];

const productData = [
  {
    img: "/images/product-first.png",
    heading: "Software",
    description: "All in one management software",
  },
  {
    img: "/images/product-first.png",
    heading: "Software",
    description: "All in one management software",
  },
  {
    img: "/images/product-first.png",
    heading: "Software",
    description: "All in one management software",
  },
  {
    img: "/images/product-first.png",
    heading: "Software",
    description: "All in one management software",
  },
];

export default function Home({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    centerMode: false,
    afterChange: (currentSlide: number) => {
      setActiveIndex(currentSlide);
    },
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  const handleCloseMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };
  const handleMenuOpen = () => {
    setIsOpen(true);
    if (typeof window !== undefined) {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <div className="bg-primary w-full">
      <div className="bg-primary container m-auto overflow-hidden lg:px-20">
        <Header
          handleMenuOpen={handleMenuOpen}
          handleMenuClose={handleCloseMenu}
          isOpenMenu={isOpen}
        />
        <First />
        <div className="lg:flex lg:justify-between mt-[140px]">
          <div className="lg:w-1/3s">
            <Products />
          </div>
          <motion.div
            className="px-4 lg:px-0 lg:w-2/3"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
          >
            <Slider {...settings} ref={sliderRef}>
              {productData.map((product, index) => {
                const active = index === isActiveIndex;
                return (
                  <div key={index}>
                    {active ? (
                      <ProductCard
                        description={product.description}
                        heading={product.heading}
                        isActiveIndex={isActiveIndex}
                      />
                    ) : (
                      <Image
                        src={product.img}
                        alt="product-first"
                        width={100}
                        height={100}
                        className="w-full object-cover mt-9 lg:mt-0 mx-[12px] px-3 py-3.5 rounded-2xl "
                      />
                    )}
                  </div>
                );
              })}
            </Slider>
          </motion.div>
        </div>

        <AboutUs />
        <Customers />
        <Services />
        <Projects projects={projectsData} />
        {isOpen && <MobileMenu isOpen={isOpen} onClick={handleCloseMenu} />}
      </div>
      <Footer />
    </div>
  );
}
