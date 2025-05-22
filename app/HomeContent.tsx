// 'use client';

// import dynamic from 'next/dynamic';
// import Hero from '@/components/Hero';
// import Footer from '@/components/Footer';
// import { FloatingNav } from '@/components/ui/FloatingNav';
// import { navItems } from '@/data';

// const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
// const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });

// const HomeContent = () => {
//   return (
//     <main className='relative bg-purple-950 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
//       <div className='max-w-7xl w-full'>
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid />
//         <RecentProjects />
//         <Footer />
//       </div>
//     </main>
//   );
// };

// export default HomeContent;



"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FileDown } from "lucide-react";
import { useScrollVisibility } from "@/components/hooks/useScrollVisibility";
import { motion } from "framer-motion";

const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });

const HomeContent = () => {
  const visible = useScrollVisibility();

  return (
    <main className="relative bg-purple-950 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      {/* === Animated Logo === */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -50 }}
        transition={{ duration: 0.3 }}
        className="fixed top-4 left-4 z-[6000]"
      >
        <div className="rounded-full bg-black shadow-lg hover:scale-105 transition-transform p-2">
          <img
            src="/nameLogo.jpg"
            alt="SB Logo"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </motion.div>

      {/* === Animated Resume Button === */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -50 }}
        transition={{ duration: 0.3 }}
        className="fixed top-5 right-4 z-[6000] flex items-center space-x-2"
      >
        {/* Desktop Button */}
        <a
          href="/Supriti Basak_Updated-Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gradient-to-r from-purple-900 to-black text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform text-sm font-medium"
        >
          Resume
        </a>

        {/* Mobile Icon */}
        <a
          href="/Supriti Basak_Updated-Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden bg-gradient-to-r from-purple-900 to-black p-2 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <FileDown className="w-6 h-6 text-white" />
        </a>
      </motion.div>

      {/* === Main Content === */}
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default HomeContent;
