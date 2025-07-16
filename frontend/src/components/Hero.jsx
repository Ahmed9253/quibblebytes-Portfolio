import React from "react";
import heroBg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover md:object-fill"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Boost Your Online Business <br />
          with <span className="text-green-500 font-bold">Quibblebyte</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm md:text-base text-gray-300">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button className="mt-6 w-fit px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-md shadow-lg transition duration-300 cursor-pointer">
          GET FREE CONSULTATION
        </button>
      </div>
    </section>
  );
}
