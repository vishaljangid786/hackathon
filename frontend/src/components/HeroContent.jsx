import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col gap-10 mt-16 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-5xl mb-2">
          What is a hackathon ?
        </h1>
        <hr className="bg-black w-full h-[1px] border-none" />
        <p className="text-base md:text-lg">
          Hackathon is a tool to drive sustained innovation and crowdsource
          solutions to address pressing real-life business problems and social
          issues. A hackathon is typically a time-bound competitive event where
          participants collaborate to build proofs of concept and minimum viable
          products for a specific pre-defined problem or to innovate.
        </p>
      </div>

      <div className="img flex items-center justify-center">
        <img
          src={assets.hackathon}
          className="w-full max-w-[1000px] h-auto object-cover"
          alt="Hackathon"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2">
          How does a hackathon help in innovation?
        </h1>
        <hr className="bg-black w-full h-[1px] border-none" />
        <p className="text-base md:text-lg">
          “If you look at history, innovation does not come just from giving
          people incentives; it comes from creating environments where their
          ideas can connect,” says Steven Johnson, an American author. In a way,
          hackathons complement traditional innovation methods. Through
          hackathons, companies harvest ideas and knowledge to take their
          technology to the next level. With the added advantage of crowd-driven
          ideation, companies can now move fast, reduce the time-to-market, and
          get ahead in the race.
        </p>
        <p className="text-base md:text-lg">
          Traditionally, the responsibility of coming up with innovative
          products, services, and business models was assigned only to a handful
          of people within the organization. Generally, a dedicated R&D or a
          specific unit for innovation was assigned to the task. Nowadays,
          companies, both big and small, conduct hackathons to drive innovation.
          With the way the workforce today is connected today, collaborative
          innovation is easy. Concrete ideas derived from hackathons have helped
          deliver top-notch products, better customer experience, and greater
          revenue.
        </p>
        <p className="text-base md:text-lg">
          Companies have interpreted the hackathon concept in various ways.
          However, McKinsey says that top companies haven't fully understood the
          potential of hackathons as tools of disruptive innovation.
        </p>
      </div>

      <div className="img flex items-center justify-center">
        {/* <img
          src={assets.hack}
          className="w-full max-w-[1000px] h-auto object-cover"
          alt="Hackathon Process"
        /> */}
      </div>
    </div>
  );
};

export default About;
