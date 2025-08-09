"use client";
import { useRouter } from "@/i18n/navigation";
import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";

export default function Search() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen px-4 sm:px-8 lg:px-20 xl:px-40 my-[4rem] leading-relaxed">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url(/service-bg.png)] bg-no-repeat bg-fixed bg-cover opacity-5"></div>

      <div className="mx-auto text-justify relative z-10">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="text-[#4B2615] text-sm sm:text-base py-6 flex gap-x-2 items-center cursor-pointer hover:underline"
        >
          <IconArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" /> Back
        </button>
      </div>
    </div>
  );
}
