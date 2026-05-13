"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading text-center font-semibold text-white text-5xl">
        Kind words from {' '}
        <span className="text-purple-300 font-bold text-5xl animate-pulse"> 
            some amazing people
        </span>
      </h1>

      <div className="flex flex-col items-center mt-20">
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
        />
       </div>
    </section>
  );
};

export default Testimonials;