import React from 'react'
import Button from '../items/Button'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import Titlesection from '../items/Titlesection';


export default function About() {
  return (
    <section>
      <div className="flex justify-between min-h-screen">
        <div className="">
          <div className="">
            <Titlesection titleh2="Qui suis-je ?" titleh3="à propos de moi" />
            <div className=" text-blueindigo text-3xl flex space-x-4 py-6">
              <Link href="/">
                <a>
                  <FaLinkedinIn />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <FaTwitter />
                </a>
              </Link>
            </div>
          </div>
          <p className="text-graywriting py-6">
            Je m'appelle Kylian, j'ai 22 ans et je suis actuellement en licence
            pro à La Rochelle pour devenir développeur web full-stack. Après
            celle-ci je souhaiterais poursuivre sur un master pour élargir mes
            compétences dans le domaine du web.
          </p>
          <p className="text-graywriting py-6">
            J'aime toucher à tout et être autonome sur les projets que l'on me
            confie, cependant j'apporte une affection supplémentaire au
            développement dit back-end, notamment avec Laravel.
          </p>
          <div className="py-16">
            <Button title="Mon CV" link="/" />
          </div>
        </div>
        <div className="">
          <img src="img/computer.png" alt="" className=" w-[0px] lg:w-[100%]" />
        </div>
      </div>
    </section>
  );
}
