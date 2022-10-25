import React from 'react'
import Cardcontact from '../cards/Cardcontact';
import Button from '../items/Button';
import Titlesection from '../items/Titlesection';
import Contactme from './Contactme';

export default function Contact() {
  return (
    <section>
      <div className="py-24">
        <div className="pt-24 grid justify-items-center text-center ">
          <Titlesection
            titleh2="Vous savez où me contacter"
            titleh3="Contact"
          />
        </div>
        <div className="py-8">
          <Contactme />
        </div>
        <div className="pt-24 grid justify-items-center text-center ">
          <div className="">
            <h2 className="text-4xl text-bluetitle font-semibold py-8 animate-pulse">
              Une question ?
            </h2>
          </div>
          <div className="flex space-x-3">
            <div className="bg-blueindigo w-20 h-[3px]"></div>
            <div className="bg-blueindigo w-10 h-[3px]"></div>
          </div>
        </div>
        <div className="">
          <Cardcontact />
        </div>
      </div>
      <div className="">
        <form action="">
          <input
            type="email"
            name=""
            id=""
            className="border-2 rounded w-full p-2 my-8"
            placeholder="Email"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Votre demande"
            className="border-2 rounded w-full p-2"
          ></textarea>
          <div className="text-center py-12">
            <Button title="Envoyer" link="/" />
          </div>
        </form>
      </div>
    </section>
  );
}
