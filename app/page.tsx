"use client";

import { useState } from "react";
import HomeContent from "./HomeContent";
import IntroScreen from "@/components/IntroScreen";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <IntroScreen onEnter={() => setEntered(true)} isVisible={!entered} />}
      {entered && <HomeContent />}
    </>
  );
}
