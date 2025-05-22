'use client';
import { useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export const useScrollVisibility = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const previous = scrollYProgress.getPrevious();
      const direction = current - (previous ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return visible;
};
