'use client';
import { NavItems, NavItemsType } from '@/utils/data';
import {Link} from '@/i18n/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/slices/themeSlice';
import { RootState } from '@/store/store';
import {
  IconChevronDown,
  IconMenu2,
  IconX,
  IconWorld,
  IconPalette,
} from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar';

export default function Appbar({locale}:{locale:string}) {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const themes = ['light', 'dark', 'brown'] as const;

  return (
    <div className='w-full z-50 fixed top-0 bg-white dark:bg-black brown:bg-[#4e2618] text-black dark:text-white brown:text-white px-6 lg:px-20 h-[4rem] flex justify-between items-center'>
      {/* Logo */}
      <div className='text-lg font-bold'>LOGO</div>

      {/* Desktop Menu */}
      <div className='hidden lg:flex gap-x-8 items-center relative'>
        {NavItems.map((navItem, i) =>
          navItem.type === NavItemsType.LINK ? (
            <Link className='cursor-pointer' key={navItem.text + i} href={navItem.href || '/'}>
              {navItem.text}
            </Link>
          ) : (
            <div
              className='cursor-pointer flex items-center gap-1'
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              key={navItem.text + i}
            >
              {navItem.text}
              <IconChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </div>
          )
        )}

        {/* Dropdown Panel */}
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className='fixed top-[4rem] left-0 right-0 mx-20 p-10 grid grid-cols-4 gap-4  bg-white dark:bg-black brown:bg-[#4e2618] rounded-b-3xl z-10 border-t border-black/10 dark:border-white/10'
            >
              {NavItems[2].dropdownItems?.map((dropdownItem, i) => (
                <Link key={dropdownItem.text + i} href={dropdownItem.href || '/'}>
                  {dropdownItem.text}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* Right Section - Desktop */}
      <div className='hidden lg:flex items-center gap-4 relative'>
        {/* Search Bar */}   
        <SearchBar/>       
        {/* Theme Dropdown */}
        <div className='relative'>
          <button 
            onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
            className='flex items-center gap-1 px-2 py-1 bg-white dark:bg-black brown:bg-[#4e2618] rounded text-sm'
          >
            <IconPalette size={16} />
            Theme
            <IconChevronDown size={16} className={`${isThemeDropdownOpen ? 'rotate-180' : ''} transition-transform`} />
          </button>

          <AnimatePresence>
            {isThemeDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className='absolute right-0 mt-2 bg-white dark:bg-black brown:bg-[#4e2618] border border-black/10 dark:border-white/10 brown:border-black/50 p-2 rounded shadow-lg flex flex-col gap-1 z-10'
              >
                {themes.map((t) => (
                  <button
                    key={t}
                    className={`px-3 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 text-center hover:text-black dark:hover:text-white ${
                      theme === t ? 'bg-zinc-700 brown:bg-[#74402d] text-white' : ''
                    }`}
                    onClick={() => {
                      dispatch(setTheme(t));
                      setIsThemeDropdownOpen(false);
                    }}
                  >
                    {t[0].toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Language Dropdown */}
        <div className='relative'>
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className='flex items-center gap-1 px-2 py-1 bg-white dark:bg-black brown:bg-[#4e2618] rounded text-sm'
          >
            <IconWorld size={16} />
            {language.toUpperCase()}
            <IconChevronDown size={16} className={`${isLanguageDropdownOpen ? 'rotate-180' : ''} transition-transform`} />
          </button>

          <AnimatePresence>
            {isLanguageDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className='absolute right-0 mt-2 bg-white dark:bg-black brown:bg-[#4e2618] border border-black/10 dark:border-white/10 brown:border-black/50 p-2 rounded shadow-lg flex flex-col gap-1 z-10'
              >
                {['en', 'ar'].map((lang) => (
                  <Link
                    href={"/"}
                    locale={lang}
                    key={lang}
                    className={`px-3 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 text-center hover:text-black dark:hover:text-white ${
                      locale === lang ? 'bg-zinc-700 brown:bg-[#74402d] text-white' : ''
                    }`}                    
                  >
                    {lang.toUpperCase()}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hamburger Icon - Mobile only */}
      <div className='lg:hidden'>
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <IconMenu2 size={24} />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-black brown:bg-[#4e2618] p-6 z-50 text-black dark:text-white brown:text-white flex flex-col gap-6 overflow-y-auto'
          >
            <div className='flex justify-end items-center gap-x-4 uppercase bg-neutral-100 brown:bg-[#74402d] dark:bg-neutral-900 px-4 py-1 rounded-full'>
              <span className='text-lg font-bold'>Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <IconX size={24} />
              </button>
            </div>
            {/* Search Bar */}   
            <SearchBar/> 

           {/* Theme Selector (Mobile Only) */}
           <div className='flex flex-col gap-2'>
              <span className='font-semibold flex items-center gap-2'>
                <IconPalette size={18} />
                Theme
              </span>
              {themes.map((t) => (
                <button
                  key={t}
                  className={`pl-6 px-3 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 ${
                    theme === t ? 'bg-zinc-700 brown:bg-[#74402d] text-white' : ''
                  }`}
                  onClick={() => {
                    dispatch(setTheme(t));
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t[0].toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>

            {/* Language Selector (Mobile Only) */}
            <div className='flex flex-col gap-2 mt-4'>
              <span className='font-semibold flex items-center gap-2'>
                <IconWorld size={18} />
                Language
              </span>
              {['en', 'ar'].map((lang) => (
                <button
                  key={lang}
                  className={`pl-6 px-3 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 ${
                    language === lang ? 'bg-zinc-700 brown:bg-[#74402d] text-white' : ''
                  }`}
                  onClick={() => {
                    setLanguage(lang as 'en' | 'ar');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Divider */}
            <hr className='border-t border-neutral-300/50 dark:border-neutral-700' />           
            {/* Nav Items */}
            {NavItems.map((navItem, i) =>
              navItem.type === NavItemsType.LINK ? (
                <Link key={navItem.text + i} href={navItem.href || '/'} onClick={() => setIsMobileMenuOpen(false)}>
                  {navItem.text}
                </Link>
              ) : (
                <div key={navItem.text + i}>
                  <div className='font-semibold'>{navItem.text}</div>
                  <div className='pl-6 flex flex-col gap-2 mt-2 opacity-70'>
                    {navItem.dropdownItems?.map((item, j) => (
                      <Link key={item.text + j} href={item.href || '/'} onClick={() => setIsMobileMenuOpen(false)}>
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}            
            
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
