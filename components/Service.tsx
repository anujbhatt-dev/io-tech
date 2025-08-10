"use client"
import { useRouter } from "@/i18n/navigation";
import { IconArrowLeft, IconSquareFilled } from "@tabler/icons-react";
import React from "react";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

export default function Service({ data, locale }: { data : any, locale:"en"|"ar" }) {
    const router = useRouter();
  return (
    <div className="relative min-h-screen px-4 sm:px-8 lg:px-20 xl:px-40 my-[4rem] leading-relaxed">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url(/service-bg.png)] bg-no-repeat bg-fixed bg-cover opacity-5"></div>

      <div className="mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="text-[#4B2615] text-sm sm:text-base py-6 flex gap-x-2 items-center cursor-pointer hover:underline"
        >
          <IconArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" /> Back
        </button>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#4B2615]">
          {data.label}
        </h1>

        {/* Below will be data.description  */}
        <BlocksRenderer
          content={data.description}
          blocks={{
            heading: ({ children, level }) => {
              if (level === 1) {
                return (
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#4B2615]">
                    {children}
                  </h1>
                );
              }
              if (level === 2) {
                return (
                  <h2 className="text-lg sm:text-xl font-semibold text-[#4B2615] my-4 mt-8">
                    {children}
                  </h2>
                );
              }
              if (level === 3) {
                return (
                  <h3 className="text-base sm:text-lg font-semibold text-[#4B2615] mt-4 mb-2">
                    {children}
                  </h3>
                );
              }
              return <p className="text-base sm:text-lg font-semibold text-[#4B2615] mt-4 mb-2">{children}</p>;
            },
            paragraph: ({ children }) => (
              <p className="text-[#1E1E1E] my-6 sm:my-8 text-sm sm:text-base lg:text-lg">
                {children}
              </p>
            ),
            list: ({ children, format }) => {
              if (format === "ordered") {
                return <ol className="list-decimal ml-6 space-y-2 lg:pl-5">{children}</ol>;
              }
              return <ul className="list-disc ml-6 space-y-2 lg:pl-5">{children}</ul>;
            },
            "list-item": ({ children }) => (
              <li className="text-[#1E1E1E]/70 flex-1 text-sm sm:text-base">
                {children}
              </li>
            ),
            quote: ({ children }) => (
              <blockquote className={`${locale==="ar"?" border-r-4 border-black/30  pr-4 sm:pr-6 items-end":" border-l-4 border-black/30 pl-4 sm:pl-6 items-start"} flex gap-x-2  my-4 bg-neutral-300`}>
                <div>
                  <IconSquareFilled className="text-[#4B2615] h-[1rem] w-[1rem] sm:h-4 sm:w-4 mt-1 flex-no-shrink" />
                </div>
                <div className="text-[#1E1E1E] text-sm sm:text-base lg:text-lg text-right">
                {children}
                </div>
              </blockquote>
            ),
          }}
        />




        </div>
    </div>
  );
}
