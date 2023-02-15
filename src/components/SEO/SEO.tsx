import { NextSeo } from "next-seo";

const SEO = () => {
  return (
    <NextSeo
      title="Dagdan Gylychmedov - Resume"
      description="My name is Dagdan. I am Frontend developer"
      openGraph={{
        url: "https://dagdan.vercel.app",
        title: "Dagdan Gylychmedov - Resume",
        description: "My name is Dagdan. I am Frontend developer",
        images: [
          {
            url: "https://dagdan.vercel.app/images/Dagdan.jpg",
            width: 800,
            height: 600,
            alt: "Photo",
            type: "image/jpeg",
          },
        ],
        site_name: "Dagdan Gylychmedov - Resume",
      }}
    />
  );
};

export default SEO;
