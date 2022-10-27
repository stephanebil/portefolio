import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";
import Head from "next/head";
import Hero from "../bienvenue-part1/Hero";

export default function Layout({ children, title, metaContent, description, image="img/1.jpg"}) {
  return (
    <>
      <Head>
        <title>{title} | Stephane Portfolio</title>
        <meta name="description" content={metaContent} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <div className='flex flex-col min-h-screen'>
        
        <Navbar />
        <Hero />
        <main className="flex-grow py-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}
