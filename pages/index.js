import About from "../components/apropos-part2/About";
import Hero from "../components/bienvenue-part1/Hero";
import Contact from "../components/contact-part5/Contact";
import Layout from "../components/layouts/Layout";
import Realisation from "../components/realisations-part4/Realisation";
import Skills from "../components/skills-part3/Skills";
import {createClient} from "contentful";
import Head from "next/head";

// 3b on rejoute donc {projets}
export default function Home({projets}) {
  // console.log(projets);
  return (
    <Layout title="Accueil" metaContent="Bienvenue dans mon portfolio. Je suis Stephane Bilella. développeur web React Laravel Nextjs Tailwinds contactFul">
      
      <main className=" px-20 py-10">
        <Hero />
        <About />
        <Skills />
        {/* 3c On veut que la section realisation récupère la data projets on rajoute l'élément ci dessous au component realisation et aller dans component Realisation voir 3d */}
        <Realisation projets={projets} />
        <Contact />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  //1- Connect to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  // console.log(client);

  // 2- recupere la data une fois que la promise success
  const res = await client.getEntries({
    content_type:"projets",
    limit: 9,                         //limiter à 9
    order: "sys.createdAt"            //diernier projet créé qui passe ne premier
  });
  // getEntries(voir node de consol.log) et pojets(voir contentful et voir le id du projets)
  // console.log( res); // penser à réactualiser la page à chaque console.log

  // 3- On envoie la data dans les props de la page actuelle.
  return {
    props: {
      projets: res.items, // 3.a items: voir terminal après avoir fait console.log(res) plus haut. On renvoie projets en front, le mettre en haut dans home: export default function Home({projets})
    }, // will be passed to the page component as props
  };
}