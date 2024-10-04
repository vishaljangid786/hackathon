import React, { useEffect, useRef } from "react";
import ImageCarousel from "./../components/ImageCarousal";
import HeroContent from "./../components/HeroContent";
import gsap from "gsap";
import CardSlider from "../components/CardSlider";
import Testimonials from "../components/Testimonials";

const Hero = () => {
  const carouselRef = useRef();
  const heroRef = useRef();

  useEffect(() => {
    gsap.to(carouselRef.current, {
      duration: 1,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.to(heroRef.current, {
      duration: 1,
      opacity: 1,
      ease: "power3.inOut",
      delay: 1,
    });
  }, []);


  return (
    <>
      <div
        ref={carouselRef}
        className="opacity-0"
      >
        <ImageCarousel />
      </div>
      <div
        ref={heroRef}
        className="opacity-0 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
      >
        <HeroContent />
      </div>
      <div>
        <CardSlider />
      </div>
      <div className="px-4">
        <Testimonials />
      </div>
    </>
  );
};

export default Hero;
