"use client";

import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id='projects'>
      <h1 className='heading text-center font-semibold text-white text-5xl'>
        A small selection of{' '}
        <span className='text-blue-300 font-bold text-5xl animate-pulse'>
          recent projects
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={`/projects/${item.id}`}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-white line-clamp-1">
                {item.title}
              </h1>

              <p
                className="text-white lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
