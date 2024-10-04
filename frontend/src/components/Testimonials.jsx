import React from "react";
import { assets } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="relative">
      <img
        src={assets.pcge}
        className="absolute w-full h-full object-cover"
        alt="Testimonials background"
      />
      <div className="relative w-full bg-[#7d7d7ddd] pt-20">
        <h1 className="text-3xl text-center font-semibold text-purple-500">
          Our Testimonials
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center text-zinc-900">
          What Customers Say About Us
        </p>

        {/* Reviews */}
        <div className="flex flex-col items-center mt-20 xl:flex-row justify-around xl:px-40 px-0 gap-12">
          <div className="w-[90%] lg:w-[60%] relative">
            <div className="bg-gray-300 mt-10 p-5 z-10">
              <div className="flex px-6 justify-between">
                <div className="stars mt-5">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="text-yellow-500 text-xl fa-solid fa-star"
                    ></i>
                  ))}
                </div>
                <i className="text-blue-400 text-5xl fa-solid fa-message"></i>
              </div>
              <p className="text-sm sm:text-lg md:text-xl mt-4 mb-8 text-gray-500">
                My dear friends! Parishkar is a college where, along with
                educating students, their overall personality development is
                also nurtured. Here, you are provided with the right guidance to
                achieve your goals.
              </p>
            </div>
            <div className="py-8 sm:py-12 px-6 flex gap-4 sm:gap-8">
              <img src={assets.navneet} className="w-16 h-16 sm:h-24 rounded-full sm:w-24" alt="User" />
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-2xl font-bold">
                  NAVNEET BAIRA
                </h1>
                <p className="text-base sm:text-xl">Student of B.Sc.</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="w-[90%] lg:w-[60%] relative">
            <div className="bg-gray-300 mt-10 p-5 z-10">
              <div className="flex px-6 justify-between">
                <div className="stars mt-5">
                  {[...Array(4)].map((_, i) => (
                    <i
                      key={i}
                      className="text-yellow-500 text-xl fa-solid fa-star"
                    ></i>
                  ))}
                  <i className="text-gray-500 text-xl fa-solid fa-star"></i>
                </div>
                <i className="text-blue-400 text-5xl fa-solid fa-message"></i>
              </div>
              <p className="text-sm sm:text-lg md:text-xl mt-4 mb-8 text-gray-500">
                Parishkar family welcomes you. By taking admission in Parishkar
                College, you have come to give meaning to your life. In my view,
                your decision is correct because Parishkar College has always
                been striving to give purpose to every student's life.
              </p>
            </div>
            <div className="py-8 sm:py-12 px-6 flex gap-4 sm:gap-8">
              <img src={assets.lekhraj} className="w-16 h-16 sm:h-24 rounded-full sm:w-24" alt="User" />
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-2xl font-bold">
                  LEKHRAJ SHEKHAWAT
                </h1>
                <p className="text-base sm:text-xl">Student of B.C.A.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
