export interface HeroSlideSchema {
    id: number;
    heading: string;
    subHeading: string;
    href: string;
    bgImageUrl:{
        alternativeText:string,
        url:string
    },
    imageUrl:{
        alternativeText:string,
        url:string
    },
    linkText: string;
  }