import React from 'react'

export default function Cardrealisation({img, title, tools}) {
  return (
    <div className=" pt-64">
      <div className=" rounded-lg grid justify-items-center relative ">
        <img
          src={`img/${img}`}
          alt={title}
          className="w-[320px] hover:w-[350px]  absolute bottom-0 hover:transition duration-300"
        />
        <div className="bg-white w-[320px] p-2 text-center absolute top-0">
          <h3 className="  text-bluetitle text-xl uppercase font-bold ">
            {title}
          </h3>
          <p className="text-graywriting uppercase font-bold ">{tools}</p>
        </div>
      </div>
    </div>
  );
}
