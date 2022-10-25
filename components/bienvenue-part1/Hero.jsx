import React from 'react'
import Button from '../items/Button';

export default function 
() {
  return (
    <section className="py-16 min-h-screen">
      <div className="text-center">
        <div className="grid justify-items-center">
          <h2 className=" bg-gray-200 text-bluetitle p-2 uppercase font-bold text-md  md:text-xl rounded">
            Bienvenue sur mon portfolio
          </h2>
        </div>
        <h1 className="uppercase text-4xl md:text-6xl lg:text-8xl text-bluetitle py-8 lg:p-16 font-bold animate__animated animate__wobble">
          Développeur Web
        </h1>
        <p className="text-graywriting ">
          Retrouver ma présentation, mes compétences ainsi que mon CV
        </p>
        <div className="py-24">
          <Button title="En savoir plus" link="/" />
        </div>
      </div>
    </section>
  );
}
