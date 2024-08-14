export type SubNavigation = {
  title: string;
  link: string;
  description: string;
  icon: string;
};

export type Navigation = {
  title: string;
  link: string;
  subNavigation?: SubNavigation[];
  isbutton?: boolean;
};

export const navigation: Navigation[] = [
  {
    title: "How it works",
    link: "/#howItWorks",
  },
  {
    title: "Features",
    link: "/#features",
  },
  {
    title: "Usecases",
    link: "/#usecases",
  },
  //   {
  //     title: "Contact us",
  //     link: "/",
  //     isbutton: true,
  //   },
];

export const solutions: Navigation[] = [
  { title: "Cyber security", link: "/solutions/cyber-security" },
  // { title: "Enterprise cloud", link: "/" },
  // { title: "Test automation", link: "/" },
  { title: "Mats services", link: "/services/mats" },
  { title: "Generative AI", link: "/services/generative-ai" },
];

export const company: Navigation[] = [
  { title: "About us", link: "/about-us" },
  { title: "Our team", link: "/about-us#our-team" },
  { title: "Our partners", link: "/about-us#partner" },
  // { title: "Awards & Recognition", link: "/" },
];
