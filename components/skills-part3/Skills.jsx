import React from 'react'
import Cardskills from '../cards/Cardskills';
import Titlesection from '../items/Titlesection'

export default function Skills() {
  return (
    <section>
      <div className="pt-24 grid justify-items-center text-center ">
        <Titlesection
          titleh2="Ayez une idée de mes compétences"
          titleh3="Mes skills"
        />
      </div>
      <div className="py-6 md:grid grid-cols-3 gap-24 ">
        <Cardskills
          color1="text-blueindigo"
          color2=""
          color3=""
          titleskill="html & css"
          img="htmlcssok.png"
        />
        <Cardskills
          color1="text-blueindigo"
          color2=""
          color3=""
          titleskill="laravel"
          img="laravel.png"
        />
        <Cardskills
          color1="text-blueindigo"
          color2=""
          color3=""
          titleskill="mysql"
          img="mysqlok.png"
        />
        <Cardskills
          color1="text-blueindigo"
          color2=""
          color3=""
          titleskill="php"
          img="php.png"
        />
        <Cardskills
          color1="text-blueindigo"
          color2=""
          color3=""
          titleskill="react"
          img="reactok.png"
        />
        <Cardskills
          color1="text-blueindigo"
          color2=""
          color3=""
          titleskill="next.js"
          img="nextjs.png"
        />
        <Cardskills
          color1="text-blueindigo"
          color2=""
          color3=""
          titleskill="Tailwind"
          img="tailwind.png"
        />
        <Cardskills
          color1="text-blueindigo"
          color2=""
          color3=""
          titleskill="bootstrap"
          img="bootstrap.jpg"
        />
        <Cardskills
          color1="text-blueindigo"
          color2=""
          color3=""
          titleskill="wordpress"
          img="wordpress.jpg"
        />
        <Cardskills
          color1="text-blueindigo"
          color2="text-blueindigo"
          color3=""
          titleskill="photoshop"
          img="photoshop.png"
        />
        <Cardskills
          color1="text-blueindigo"
          color2="text-blueindigo"
          color3=""
          titleskill="illustrator"
          img="illustrator.png"
        />
      </div>
    </section>
  );
}
