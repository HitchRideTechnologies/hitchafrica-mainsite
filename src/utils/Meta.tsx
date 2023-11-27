const OpenG = {
  url: "https://hitch.africa",
  siteName: "Hitch.Africa",
  images: [
    {
      url: "https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75",
      width: 800,
      height: 600,
    },
    {
      url: "https://hitch.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52548336.png&w=256&q=75",
      width: 1800,
      height: 1600,
      alt: "icon",
    },
  ],
  locale: "en_US",
  type: "website",
};

const MainR = {
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  assets: ["https://hitch.africa/press/brand-assets"],
};

export { OpenG, MainR };
