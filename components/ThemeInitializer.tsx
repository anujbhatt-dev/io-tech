'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme, ThemeType } from '@/store/slices/themeSlice';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    const loadTheme = () => {
      const savedTheme = (localStorage.getItem('theme') || 'brown') as ThemeType;

      // Remove previously set themes (optional)
      document.documentElement.classList.remove('light', 'dark', 'brown');

      // Apply new theme class and redux state
      document.documentElement.classList.add(savedTheme);
      dispatch(setTheme(savedTheme));

      // Small delay for loader animation polish
      setTimeout(() => {
        setIsThemeLoaded(true);
      }, 600);
    };

    // Ensure DOM is ready before manipulating classList
    requestAnimationFrame(loadTheme);
  }, [dispatch]);

  return (
    <AnimatePresence mode="wait">
      {!isThemeLoaded ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-screen h-screen flex items-center justify-center flex-col gap-6 bg-[#51261A] text-white"
        >
          <motion.div
            className="w-10 h-10 border-4 border-zinc-300 dark:border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
          <motion.div
            className="font-semibold text-lg tracking-wider"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Loading theme...
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
