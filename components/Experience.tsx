// import React from "react";
// import { workExperience } from "@/data";
// import { Button } from "./ui/MovingBorders";

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20">
//       <div className="w-full">
        
//         {/* HEADING */}
//         <h1 className="text-center font-semibold text-white text-4xl md:text-5xl">
//           My Work{" "}
//           <span className="text-purple-300 font-bold animate-pulse">
//             Experience
//           </span>
//         </h1>

//         {/* TIMELINE CONTAINER */}
//         <div className="mt-20 relative flex flex-col gap-16">

//           {/* Vertical Line */}
//           <div className="absolute left-6 md:left-1/4 top-0 h-full w-0.5 bg-purple-400/30" />

//           {workExperience.map((card) => (
//             <div
//               key={card.id}
//               className="grid grid-cols-[40px_1fr] md:grid-cols-[1fr_3fr] items-center gap-6"
//             >
              
//               {/* LEFT SIDE (Timeline) */}
//               <div className="relative flex items-center justify-center md:justify-end">
                
//                 {/* Dot */}
//                 <div className="w-4 h-4 bg-purple-400 rounded-full border-4 border-black z-10" />

//                 {/* Duration (Desktop) */}
//                 <p className="hidden md:block absolute right-12 text-sm text-purple-300 font-medium whitespace-nowrap">
//                   {card.duration}
//                 </p>
//               </div>

//               {/* RIGHT SIDE (Card) */}
//               <div className="flex justify-center md:justify-start">
//                 <Button
//                   duration={Math.floor(Math.random() * 10000) + 10000}
//                   borderRadius="1.75rem"
//                   style={{
//                     background: "rgb(4,7,29)",
//                     backgroundImage:
//                       "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//                     borderRadius: `calc(1.75rem * 0.96)`,
//                   }}
//                   className="w-full max-w-2xl text-white"
//                 >
//                   <div className="flex flex-col lg:flex-row lg:items-center p-5 lg:p-10 gap-4 text-left">
                    
//                     {/* LOGO */}
//                     <img
//                       src={card.thumbnail}
//                       alt={card.title}
//                       className="lg:w-28 md:w-20 w-16"
//                     />

//                     {/* TEXT CONTENT */}
//                     <div className="lg:ml-5">
                      
//                       {/* TITLE */}
//                       <h1 className="text-xl md:text-2xl font-bold text-left">
//                         {card.title}
//                       </h1>

//                       {/* DESCRIPTION */}
//                       <p className="mt-3 font-semibold text-white/80 text-left leading-relaxed">
//                         {card.desc}
//                       </p>

//                       {/* Duration (Mobile) */}
//                       <p className="md:hidden mt-3 text-purple-300 text-sm">
//                         {card.duration}
//                       </p>
//                     </div>

//                   </div>
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute top-1/2 left-1/4 w-96 h-96
          bg-purple-500/10 rounded-full blur-3xl
          -translate-y-1/2
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
          <h1
            className="
              text-center text-4xl md:text-5xl font-semibold
              text-white mt-4
            "
          >
            My Work{" "}
            <span className="text-purple-300 font-bold animate-pulse">
              Experience
            </span>
          </h1>

        {/* TIMELINE CONTAINER */}
        <div className="relative mt-20">

          {/* VERTICAL TIMELINE */}
          <div
            className="
              absolute
              left-5
              md:left-1/2
              top-0
              h-full
              w-0.75
              bg-linear-to-b
              from-purple-400
              via-purple-500/40
              to-transparent
              md:-translate-x-1/2
            "
          />

          {/* EXPERIENCE ITEMS */}
          <div className="space-y-16">
            {workExperience.map((card, index) => (
              <div
                key={card.id}
                className="
                  relative
                  grid
                  md:grid-cols-2
                  md:gap-16
                  items-start
                "
              >

                {/* TIMELINE DOT */}
                <div
                  className="
                    absolute
                    left-5
                    md:left-1/2
                    top-8
                    -translate-x-1/2
                    z-20
                  "
                >
                  <div
                    className="
                      w-5 h-5 rounded-full
                      bg-black
                      border-[5px]
                      border-purple-400
                      shadow-[0_0_20px_rgba(168,85,247,0.8)]
                    "
                  />
                </div>

                {/* EMPTY LEFT SIDE FOR ALTERNATING LAYOUT */}
                {index % 2 !== 0 && (
                  <div className="hidden md:block" />
                )}

                {/* CONTENT CARD */}
                <div
                  className={`
                    pl-14
                    md:pl-0
                    ${index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12 md:text-left"}
                  `}
                >
                  <Button
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius="1.75rem"
                    style={{
                      background: "rgb(4,7,29)",
                      backgroundImage:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                      borderRadius: `calc(1.75rem * 0.96)`,
                    }}
                    className="
                      w-full
                      text-white
                      border
                      border-purple-500/20
                      hover:border-purple-400/40
                      transition-all
                      duration-500
                    "
                  >
                    <div
                      className={`
                        flex flex-col
                        p-6 md:p-8
                        gap-5
                        ${
                            index % 2 === 0
                                ? "items-end text-right"
                                : "items-start text-left"
                        }
                      `}
                    >
                        {/* DURATION */}
                      <p
                        className="
                          text-purple-300
                          font-medium
                          text-sm
                        "
                      >
                        {card.duration}
                      </p>

                      {/* LOGO */}
                      <div
                        className={`
                          flex
                          ${index % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"}
                        `}
                      >
                        <img
                          src={card.thumbnail}
                          alt={card.title}
                          className="w-24 md:w-28 object-contain"
                        />
                      </div>

                      {/* TITLE */}
                      <h1
                        className="
                          text-2xl md:text-3xl
                          font-bold
                          leading-tight
                          italic
                        "
                      >
                        {card.title}
                      </h1>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          text-white/80
                          leading-relaxed
                          text-base
                          max-w-lg
                        "
                      >
                        {card.desc}
                      </p>
                    </div>
                  </Button>
                </div>

                {/* EMPTY RIGHT SIDE FOR EVEN ITEMS */}
                {index % 2 === 0 && (
                  <div className="hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;