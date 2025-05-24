import React from "react";
import Button from "./ui/Button";
import illustrationImg from "@images/illustration-intro.svg";
import bgPattern from "@images/bg-tablet-pattern.svg";
const Hero = () => {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap-reverse min-h-[80vh] overflow-hidden">
      <img
        src={bgPattern}
        alt="bg-pattern"
        className="absolute -top-1/12 -right-1/12 md:-top-1/4 md:-right-1/8 -z-10"
      />

      <div className="space-y-6 text-center">
        <h1 className="relative leading-[48px] text-[38px] lg:leading-[56px] lg:text-[48px]">
          Bring everyone <br /> together to build <br /> better products.
        </h1>
        <p>
          Manage makes It simple for sortware teams <br /> to plan day-to-day
          tasks while keeping the <br /> larger team goals in view.
        </p>
        <Button>Get Started</Button>
        <img
          src={bgPattern}
          alt="bg-pattern"
          className="absolute -bottom-1/4 -right-1/2 -z-10 md:hidden"
        />
      </div>
      <div className="">
        <img src={illustrationImg} alt="Hero section illustration image" />
      </div>
    </div>
  );
};

export default Hero;
