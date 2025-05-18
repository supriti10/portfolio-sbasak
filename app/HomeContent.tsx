'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import Footer from '@/components/Footer';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';

const RecentProjects = dynamic(() => import('@/components/RecentProjects'), {
  ssr: false,
});

const HomeContent = () => {
  return (
    <main className='relative bg-purple-950 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
      <div className='max-w-7xl w-full'>
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
