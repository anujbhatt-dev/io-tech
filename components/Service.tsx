"use client"
import { useRouter } from "@/i18n/navigation";
import { IconArrowLeft, IconSquareFilled } from "@tabler/icons-react";
import React from "react";

export default function Service({ data }: { data: any }) {
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

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#4B2615]">
          Legal Consultation Services
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[#1E1E1E] my-6 sm:my-8 text-sm sm:text-base lg:text-lg">
          Law Firm is one of the leading legal offices that offer exceptional
          advisory services for both individuals and companies. Our mission is
          to provide comprehensive and specialized legal support to meet our
          clients' needs and offer the best legal solutions in various cases and
          legal fields, we provide our legal consultations services as a follow:
        </p>

        {/* Section 1 */}
        <div className="mt-6 sm:mt-8">
          <h4 className="text-lg sm:text-xl font-semibold text-[#4B2615] mb-4">
            General Legal Consultations
          </h4>
          <div className="flex items-start gap-x-2 border-l-4 border-black/30 pl-4 sm:pl-6">
            <IconSquareFilled className="text-[#4B2615] h-3 w-3 sm:h-4 sm:w-4 mt-1" />
            <p className="text-[#1E1E1E] flex-1 max-w-3xl text-sm sm:text-base">
              At Law Firm, we provide comprehensive legal consultations covering
              all legal aspects that our clients may encounter in their daily
              lives or business activities. Our goal is to offer accurate legal
              advice based on a deep understanding of local and international
              laws.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mt-6 sm:mt-8">
          <h4 className="text-lg sm:text-xl font-semibold text-[#4B2615] mb-4">
            Corporate Legal Advisory
          </h4>
          <div className="flex items-start gap-x-2 border-l-4 border-black/30 pl-4 sm:pl-6">
            <IconSquareFilled className="text-[#4B2615] h-3 w-3 sm:h-4 sm:w-4 mt-1" />
            <p className="text-[#1E1E1E] flex-1 max-w-3xl text-sm sm:text-base">
              We assist corporations in understanding and complying with
              regulatory requirements, drafting contracts, and resolving
              disputes, ensuring their operations remain legally sound.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mt-6 sm:mt-8">
          <h4 className="text-lg sm:text-xl font-semibold text-[#4B2615] mb-4">
            Litigation Support
          </h4>
          <div className="flex items-start gap-x-2 border-l-4 border-black/30 pl-4 sm:pl-6">
            <IconSquareFilled className="text-[#4B2615] h-3 w-3 sm:h-4 sm:w-4 mt-1" />
            <p className="text-[#1E1E1E] flex-1 max-w-3xl text-sm sm:text-base">
              Our team offers expert guidance and representation in court,
              arbitration, and mediation, tailored to each client's specific
              legal challenges.
            </p>
          </div>
        </div>

        {/* Closing Paragraph */}
        <p className="text-[#1E1E1E] my-6 sm:my-10 text-sm sm:text-base lg:text-lg">
          At Law Firm, we aim to provide the best legal services to ensure your
          rights and offer effective legal solutions. Contact us today to
          receive professional and comprehensive legal consultation.
        </p>
      </div>
    </div>
  );
}
