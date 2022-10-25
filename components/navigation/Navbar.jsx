import Link from 'next/link'
import React, { useState } from "react";
import { MenuItems } from './MenuItems';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [active,setActive] = useState(false)
    const showMenu = () => {
      setActive(!active)
    }
  return (
    <div className=" sticky top-0 shadow z-30">
      <div className=" flex justify-between py-5 md:px-20 px-4 content-center  bg-transparento bg-white text-bluetitle font-medium">
        <div className="flex justify-between">
          <Link href="/">
            <a className="py-3 uppercase text-blueindigo font-black animate__animated animate__fadeInTopLeft">
              PortFolio
            </a>
          </Link>
        </div>

        <nav>
          <div className=" lg:hidden py-2">
            <span
              className=" font-black text-4xl text-blueindigo hover:text-bluetitle cursor-pointer"
              onClick={showMenu}
            >
              <GiHamburgerMenu />
            </span>
          </div>
          <div className="hidden  lg:space-x-10 lg:flex  lg:static  lg:items-center   md:w-full  uppercase">
            <Link href="/">
              <a className="hover:text-blueindigo ">A propos de moi</a>
            </Link>
            <Link href="about">
              <a className="hover:text-blueindigo ">About</a>
            </Link>
            <Link href="/" className="hover:text-blueindigo">
              <a className="hover:text-blueindigo">Mes skills</a>
            </Link>
            <Link href="/" className="hover:text-blueindigo">
              <a className="hover:text-blueindigo">Mes réalisations</a>
            </Link>
            <Link href="/" className="">
              <a className="bg-bluelight p-3 text-blueindigo hover:text-white hover:bg-blueindigo rounded-lg">
                Contact
              </a>
            </Link>
          </div>
          <MenuItems showMenu={showMenu} active={active} />
        </nav>
      </div>
    </div>
  );
}
