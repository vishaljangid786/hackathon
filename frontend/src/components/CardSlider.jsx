import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { cardData } from "../assets/assets";

// Example card data


// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 -right-2 transform -translate-y-1/2 border  bg-orange-600  text-white   w-10 h-20 rounded-md text-3xl active:bg-orange-700 z-10"
      onClick={onClick}
    >
      &gt;
    </button>
  );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 -left-2 transform -translate-y-1/2  border  bg-orange-600  text-white   w-10 h-20 rounded-md text-3xl active:bg-orange-700 z-10"
      onClick={onClick}
    >
      &lt;
    </button>
  );
};

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Switch every 3 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,  // Hides arrows in mobile view
        },
      },
    ],
  };

  return (
    <div className="relative max-w-6xl mx-auto py-8 font-[Roboto]">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-200 border-2 border-orange-200 p-3 rounded-lg shadow-lg">
              <div className="flex flex-col items-center p-4">
                <div className="relative w-32 h-32 mb-2">
                  <img src={card.image} alt={card.description} className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="text-lg font-bold tracking-wider text-gray-900">{card.title}</p>
                <div className="mt-2 text-gray-600 font-semibold text-md ">{card.description}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
