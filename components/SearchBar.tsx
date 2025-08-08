'use client';

import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const router = useRouter();

  const SearchSchema = Yup.object().shape({
    query: Yup.string().min(1, 'Too Short!').required('Search is required'),
  });

  const handleSubmit = (values: { query: string }) => {
    router.push(`/search?v=${encodeURIComponent(values.query)}`);
  };

  useEffect(()=>{
    // animation delay
    setTimeout(()=>{
        setIsSearchOpen(false);
    },1000)
  },[])

  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={SearchSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="relative">
            <motion.div
              className="flex items-center border border-black dark:border-white brown:border-white rounded-full p-2 overflow-hidden"
              initial={{ width: '2.5rem' }}
              animate={{ width: isSearchOpen ? '14rem' : '2.5rem' }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsSearchOpen(true)}
            >
              <IconSearch className="w-5 h-5 text-black dark:text-white brown:text-white cursor-pointer" />
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    className="ml-2 flex-grow"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                  >
                    <Field
                      name="query"
                      type="text"
                      placeholder="Search..."
                      autoComplete="off"
                      className="w-full bg-transparent outline-none text-sm text-black dark:text-white brown:text-white"
                      onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)} // Close on blur with slight delay
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {touched.query && errors.query && (
              <div className="text-xs text-red-500 mt-1">{errors.query}</div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}
