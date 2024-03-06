import React from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "../../../public/logo.png";

const Header = () => {
  return (
    <header className="flex h-15 w-full items-center px-4 md:px-6 text-white bg-white fixed z-50 ">
      <Link className="mr-6" href="#">
        {/* <MountainIcon className="h-6 w-6" /> */}
        <Image src={LOGO} alt="logo" width={24} height={24} />
      </Link>
      <div className="ml-auto flex items-center gap-4 text-black">
        <a href="#" className=" hover:text-[#F2F2F2]">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className=" hover:text-[#F2F2F2]">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="#" className=" hover:text-[#F2F2F2]">
          <i className="fab fa-youtube"></i>
        </a>

        <a
          href="https://wa.me/573202696826?text=Estoy%20interesado,%20me%20podr%C3%ADan%20dar%20más%20información"
          rel="noopener noreferrer"
          className="button button--secondary "
          target="_blank"
        >
          Contacto
        </a>
      </div>
    </header>
  );
};

export default Header;
