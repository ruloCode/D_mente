import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white dark:bg-gray-950 border-gray-200/40 dark:border-gray-800/40 px-4">
      <div className="container flex items-center justify-center h-14 px-4 text-sm dark:text-gray-400">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">{`D'mente`}</span>
        </div>
        <div className="ml-auto flex items-center gap-4 text-black">
          <a href="#" className=" hover:text-[#F2F2F2] text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className=" hover:text-[#F2F2F2] text-white">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="#" className=" hover:text-[#F2F2F2] text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
