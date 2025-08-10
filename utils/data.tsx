import { getTranslations } from "next-intl/server";
export const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api"
export const strapiMediaUrl = process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL || "http://localhost:1337"

export const fetchGlobalData = async ({locale="en"}:{locale:"ar" | "en"}) =>{
    try {
      const res = await fetch(`${strapiUrl}/global?locale=${locale}`) 
      const data = await res.json();
      return data.data    
    } catch (error) {
      console.log(error);      
    }
}

export const fetchHeroData = async ({locale="en"}:{locale:"ar" | "en"}) =>{
  try {
    const res = await fetch(`${strapiUrl}/hero-slider?locale=${locale}&populate[heroSlider][populate][bgImageUrl][fields][0]=alternativeText&populate[heroSlider][populate][bgImageUrl][fields][1]=url&populate[heroSlider][populate][imageUrl][fields][0]=alternativeText&populate[heroSlider][populate][imageUrl][fields][1]=url`) 
    const data = await res.json();
    
    return data.data.heroSlider
  } catch (error) {
    console.log(error);      
  }
}

export const fetchTeamSectionData = async ({locale="en"}:{locale:"ar" | "en"}) =>{
  try {
    const res = await fetch(`${strapiUrl}/team?locale=${locale}&populate[teamSection][populate][teamMembers][populate][imageUrl][fields][0]=alternativeText&populate[teamSection][populate][teamMembers][populate][imageUrl][fields][1]=url`) 
    const data = await res.json();
    console.dir(data.data, {depth:null});
    
    return data.data.teamSection
  } catch (error) {
    console.log(error);      
  }
}

export const fetchTestimonialSectionData = async ({locale="en"}:{locale:"ar" | "en"}) =>{
  try {
    const res = await fetch(`${strapiUrl}/testimonial?locale=${locale}&populate[testimonialSection][populate][testimonialItems][populate][imageUrl][fields][0]=alternativeText&populate[testimonialSection][populate][testimonialItems][populate][imageUrl][fields][1]=url`) 
    const data = await res.json();
    console.dir(data.data, {depth:null});
    
    return data.data.testimonialSection
  } catch (error) {
    console.log(error);      
  }
}


export enum NavItemsType {
    LINK,
    DROPDOWN
}


export const NavItems = [
    {
      type: NavItemsType.LINK,
      label: "About Us",
      href: "/about-us",
    },
    {
      type: NavItemsType.LINK,
      label: "Our Team",
      href: "/our-team",
    },
    {
      type: NavItemsType.DROPDOWN,
      label: "Services",
      dropdownItems: [
        {
          label: "Legal Consultancy Services",
          href: "/services/legal-consultancy-services",
        },
        {
          label: "Foreign Investment Service",
          href: "/services/foreign-investment-service",
        },
        {
          label: "Contracts",
          href: "/services/contracts",
        },
        {
          label: "Notarization",
          href: "/services/notarization",
        },
        {
          label: "Insurance",
          href: "/services/insurance",
        },
        {
          label: "Defense",
          href: "/services/defense",
        },
        {
          label: "Bank",
          href: "/services/bank",
        },
        {
          label: "Corporate Government Service",
          href: "/services/corporate-government-service",
        },
        {
          label: "Companies Liquidation",
          href: "/services/companies-liquidation",
        },
        {
          label: "Internal Regulations for Companies",
          href: "/services/internal-regulations",
        },
        {
            label: "Legal Consultancy Services",
            href: "/services/legal-consultancy-services",
          },
          {
            label: "Foreign Investment Service",
            href: "/services/foreign-investment-service",
          },
          {
            label: "Contracts",
            href: "/services/contracts",
          },
          {
            label: "Notarization",
            href: "/services/notarization",
          },
          {
            label: "Insurance",
            href: "/services/insurance",
          },
          {
            label: "Defense",
            href: "/services/defense",
          },
          {
            label: "Bank",
            href: "/services/bank",
          },
          {
            label: "Corporate Government Service",
            href: "/services/corporate-government-service",
          },
          {
            label: "Companies Liquidation",
            href: "/services/companies-liquidation",
          },
          {
            label: "Internal Regulations for Companies",
            href: "/services/internal-regulations",
          },
      ],
    },
    {
      type: NavItemsType.LINK,
      label: "Blog",
      href: "/blog",
    },
    {
      type: NavItemsType.LINK,
      label: "Contact Us",
      href: "/contact-us",
    },
  ];
  