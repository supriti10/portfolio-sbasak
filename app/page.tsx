// import HomeContent from './HomeContent';

// export default function Home() {
//   return <HomeContent />;
// }


"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import IntroScreen from "@/components/IntroScreen";

const HomeContent = dynamic(() => import("./HomeContent"), { ssr: false });

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered ? (
        <IntroScreen onEnter={() => setEntered(true)} />
      ) : (
        <div className="animate-fade-in transition-opacity duration-1000">
          <HomeContent />
        </div>
      )}
    </>
  );
}

