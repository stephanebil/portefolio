import React from 'react'

export default function Titlesection({titleh2, titleh3}) {
  return (
    <div className="grid justify-items-center w-[350px]">
      <div className="text-center">
        <h3 className=" p-2 uppercase text-blueindigo font-bold text-xs  bg-gray-200 rounded ">
          {titleh3}
        </h3>
      </div>
      <div className="">
        <h2 className="text-4xl text-bluetitle font-semibold py-8 animate-pulse">
          {titleh2}
        </h2>
      </div>
      <div className="flex space-x-3">
        <div className="bg-blueindigo w-20 h-[3px]"></div>
        <div className="bg-blueindigo w-10 h-[3px]"></div>
      </div>
    </div>
  );
}
