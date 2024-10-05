import React, { useState } from "react";
import { assets } from "../assets/assets";

const ImageCarousel = () => {
  const images = [
    assets.banner1,
    assets.banner2,
    assets.banner3,
    "https://www.sih.gov.in/img1/slider/sih-hackathon-process.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[60vw] md:h-[50vw] lg:h-[30vw] overflow-hidden mt-2">
      <div
        className="absolute inset-0 flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="min-w-full object-center"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 active:bg-[#000000a9] transition bg-[#00000021] text-white h-[50%] text-4xl md:text-5xl w-16 md:w-20"
        onClick={goToPrevious}
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 active:bg-[#000000a9] transition bg-[#00000021] text-white h-[50%] text-4xl md:text-5xl w-16 md:w-20"
        onClick={goToNext}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
