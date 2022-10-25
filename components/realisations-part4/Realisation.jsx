import React from 'react'
import Cardrealisation from '../cards/Cardrealisation';
import Titlesection from '../items/Titlesection';

export default function Realisation() {
  return (
    <section>
      <div className="pt-24 grid justify-items-center text-center ">
        <Titlesection
          titleh2="Voyez par vous même"
          titleh3="Mes réalisations"
        />
        <p className="text-graywriting py-6">
          Voici quelques images illustratives de projets que j'ai pu réaliser
        </p>
      </div>
      <div className="py-6 md:grid grid-cols-3 gap-24">
        <Cardrealisation
          title="1er portfolio front"
          tools="React Tailwindcss"
          img="1.jpg"
        />
        <Cardrealisation
          title="Blog de James Quick"
          tools="React Tailwindcss"
          img="capture1.jpg"
        />
        <Cardrealisation
          title="Bienvenue chez Mito Bio"
          tools="html css js"
          img="capture2.jpg"
        />
        <Cardrealisation
          title="volvo"
          tools="wordpress"
          img="volvo-home-6.jpg"
        />
      </div>
    </section>
  );
}
