'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { SubscribeHandle } from '@/utils/action';
import { strapiUrl } from '@/utils/data';
import { toast } from 'sonner';

export default function SubscribeForm({locale}:{locale:"en"|"ar"}) {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });
  
  const handleSubmit = async (values: typeof initialValues, { resetForm }: any) => {
    setSuccessMessage('');
    setErrorMessage('');
    
    try {
      const res = await SubscribeHandle(values.email)
      console.log("subscribed");

      if (!res) {
        throw new Error('Subscription failed');
      }
      toast.success("Subscribed!!")
      setSuccessMessage('Successfully subscribed!');
      resetForm();
    } catch (error: any) {
      setErrorMessage(error.message || 'Something went wrong');
    }
  };

  return (
    <div className=''>      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='flex justify-between items-center relative lg:w-[20rem] bg-black dark:bg-white brown:bg-white dark:text-black rounded-lg flex-wrap'>
          <div>
            <Field
              name='email'
              type='email'
              placeholder={locale==="en"?'Enter your email':"أدخل بريدك الإلكتروني"}
              className='text-white dark:text-black brown:text-black w-full px-4 py-4 placeholder:text-neutral-400'
            />
            <ErrorMessage
              name='email'
              component='div'
              className='text-sm text-red-600 mt-1 px-4'
            />
          </div>

          <button
            type='submit'
            className='font-medium py-2 px-4 rounded transition bg-white dark:bg-black brown:bg-[#4e2618] text-black dark:text-white brown:text-white mr-2'
          >
            Subscribe
          </button>

          {successMessage && (
              <div className='text-green-600 text-sm text-center px-4'>{successMessage}</div>
            )}
          {errorMessage && (
              <div className='text-red-600 text-sm text-center px-4'>{errorMessage}</div>
            )}
        </Form>
      </Formik>
    </div>
  );
}
