const Footer = () => {
  return (
    <footer className="flex justify-center w-full items-center p-5 col-span-12 lg:col-span-7 2xl:col-span-8 xl:px-5">
      <svg
        className="w-6 h-6 m-2 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
      DE group
    </footer>
  );
};

export default Footer;
