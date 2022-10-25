import About from "../components/apropos-part2/About";
import Hero from "../components/bienvenue-part1/Hero";
import Contact from "../components/contact-part5/Contact";
import Layout from "../components/layouts/Layout";
import Realisation from "../components/realisations-part4/Realisation";
import Skills from "../components/skills-part3/Skills";
import {createClient} from "contentful";


export default function Home() {
  return (
    <Layout>
      <main className=" px-20 py-10">
        <Hero/>
        <About/>
        <Skills/>
        <Realisation/>
        <Contact/>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  //1- Connect to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  // console.log(client);
  return {
    props: {}, // will be passed to the page component as props
  };
}