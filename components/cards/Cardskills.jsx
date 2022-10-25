import React from 'react'
import { FaStar } from "react-icons/fa";
export default function Cardskills({color1, color2, color3, titleskill, img}) {
  return (
    <div className="py-8">
      <div className="border-2 rounded hover:shadow-xl hover:border-t-4 hover:border-t-red-500 grid justify-items-center p-6 hover:transition duration-300">
        <img src={`img/${img}`} alt={titleskill} className="h-[100px]" />
        <h3 className="text-graywriting text-xl uppercase font-bold py-3">
          {titleskill}
        </h3>
        <div className="flex ">
          <div className={color1}>
            <FaStar />
          </div>
          <div className={color2}>
            <FaStar />
          </div>
          <div className={color3}>
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
}
