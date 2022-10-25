import Link from 'next/link';
import React from 'react'
import Cardrealisation from '../cards/Cardrealisation';
import Titlesection from '../items/Titlesection';

// 3d mettre projets ici
export default function Realisation({projets}) {
  // console.log(props);
  
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
        {/* 3e faire cette map boucle en laissant qu'une seule carte */}
        {projets.map((projet) => (
          // <Link href='projets/[slug].jsx'>
          <Link href={`projets/${projet.fields.slug}`}>
            <a>
                <Cardrealisation
                // 3f rejouter key (voir console pour repérer l'id: dans sys)
                key={projet.sys.id} 
                // // 3g rejouter title (voir console pour repérer l'id: dans sys)
                // title={projet.fields.title}
                // tools="React Tailwindcss"
                // img="1.jpg"
                
                // 3h rajouer projet={projet} au singulier car une card. aller à Cardrealisation et voir 3i
                projet={projet}
                />
            </a>
          </Link> 
        ))}
      </div>
    </section>
  );
}
