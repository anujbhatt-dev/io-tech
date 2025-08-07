export enum NavItemsType {
    LINK,
    DROPDOWN
}
export const NavItems = [
    {
      type: NavItemsType.LINK,
      text: "About Us",
      href: "/about-us",
    },
    {
      type: NavItemsType.DROPDOWN,
      text: "Services",
      dropdownItems: [
        {
          text: "Legal Consultancy Services",
          href: "/services/legal-consultancy-services",
        },
        {
          text: "Foreign Investment Service",
          href: "/services/foreign-investment-service",
        },
        {
          text: "Contracts",
          href: "/services/contracts",
        },
        {
          text: "Notarization",
          href: "/services/notarization",
        },
        {
          text: "Insurance",
          href: "/services/insurance",
        },
        {
          text: "Defense",
          href: "/services/defense",
        },
        {
          text: "Bank",
          href: "/services/bank",
        },
        {
          text: "Corporate Government Service",
          href: "/services/corporate-government-service",
        },
        {
          text: "Companies Liquidation",
          href: "/services/companies-liquidation",
        },
        {
          text: "Internal Regulations for Companies",
          href: "/services/internal-regulations",
        },
        {
            text: "Legal Consultancy Services",
            href: "/services/legal-consultancy-services",
          },
          {
            text: "Foreign Investment Service",
            href: "/services/foreign-investment-service",
          },
          {
            text: "Contracts",
            href: "/services/contracts",
          },
          {
            text: "Notarization",
            href: "/services/notarization",
          },
          {
            text: "Insurance",
            href: "/services/insurance",
          },
          {
            text: "Defense",
            href: "/services/defense",
          },
          {
            text: "Bank",
            href: "/services/bank",
          },
          {
            text: "Corporate Government Service",
            href: "/services/corporate-government-service",
          },
          {
            text: "Companies Liquidation",
            href: "/services/companies-liquidation",
          },
          {
            text: "Internal Regulations for Companies",
            href: "/services/internal-regulations",
          },
      ],
    },
    {
      type: NavItemsType.LINK,
      text: "Our Team",
      href: "/our-team",
    },
    {
      type: NavItemsType.LINK,
      text: "Blog",
      href: "/blog",
    },
    {
      type: NavItemsType.LINK,
      text: "Contact Us",
      href: "/contact-us",
    },
  ];
  