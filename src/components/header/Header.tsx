import React from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "../../../public/logo.png";

const Header = () => {
  return (
    <header className="flex h-20 w-full items-center px-4 md:px-6 text-white bg-white fixed z-50 ">
      <Link className="mr-6" href="#">
        {/* <MountainIcon className="h-6 w-6" /> */}
        <Image src={LOGO} alt="logo" width={50} height={50} />
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


        <button className="border-[#C2CBB8] border-1 ml-4 p-2  rounded-sm text-[#C2CBB8] font-bold  ">Contacto</button>
      </div>
    </header>
  );
};

export default Header;
