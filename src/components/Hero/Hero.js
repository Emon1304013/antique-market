import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Hero = () => {
  return (
    <section className="">
      <div className="flex justify-center mx-auto sm:py-12 lg:py-12 flex-col-reverse lg:flex-row lg:justify-between mb-8">
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="leading-tight text-2xl lg:text-4xl font-bold">
            Classified platform <br />
            <span className="text-[#00B29C]">
              A Marketplace <br />
            </span>
            <span>
              Connecting <br />
            </span>
            <span className="text-[#49C97A]"> Buyers and Sellers </span>
          </h1>
          <p className="mt-6 mb-8 mx-4 text-lg sm:mb-12 font-serif ">
            Make shopping SIMPLE, SECURE and FAST on the largest marketplace in
            Bangladesh.
            <br className="hidden md:inline lg:hidden" />
            Discover what you need and sell all sorts of products in our simple
            yet powerful platform
          </p>
          <div>
            <PrimaryButton>View Categories</PrimaryButton>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-4">
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_koV3TF1WkF.json"
            // style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
      </div>
    </section>
  );
};

export default Hero;
