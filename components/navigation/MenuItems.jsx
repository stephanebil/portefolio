import Link from 'next/link';
import React from 'react'

export const MenuItems = ({ showMenu, active }) => {
  return (
    <div>
      <div className="flex justify-between items-center text-bluetitle font-medium">
        <div
          className={
            active
              ? "flex-col flex absolute z-20 inset-0 lg:hidden mt-3"
              : "hidden"
          }
        >
          <div>
            <span
              onClick={showMenu}
              className="text-xl font-black text-white hover:text-blueindigo bg-bluetitle flex px-[50%] cursor-pointer"
            >
              X
            </span>
          </div>
          <div className=" uppercase bg-white">
            <div className="my-10">
              <Link href="/">
                <a className="hover:text-blueindigo ">A propos de moi</a>
              </Link>
            </div>
            <div className="my-10">
              <Link href="about">
                <a className="hover:text-blueindigo ">About</a>
              </Link>
            </div>
            <div className="my-10">
              <Link href="/">
                <a className="hover:text-blueindigo ">Mes skills</a>
              </Link>
            </div>
            <div className="my-10">
              <Link href="/">
                <a className="hover:text-blueindigo ">Mes réalisations</a>
              </Link>
            </div>
            <div className="my-10">
              <Link href="/">
                <a className="bg-bluelight p-3 text-blueindigo hover:text-white hover:bg-blueindigo rounded-lg ">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
