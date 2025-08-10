'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme, ThemeType } from '@/store/slices/themeSlice';

export default function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') || 'brown') as ThemeType;

    // Apply class and update redux state
    dispatch(setTheme(savedTheme));
    document.documentElement.classList.add(savedTheme);

    // Done loading 
    setTimeout(()=>{
        setIsThemeLoaded(true);
    },100) // Fake delay


  }, [dispatch]);

  if (!isThemeLoaded) {
    // Show full screen loader while theme is loading
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="animate-spin w-6 h-6 border-4 border-zinc-300 border-t-transparent rounded-full" />
      </div>
    );
  }

  return <>{children}</>;
}
