import React from 'react'
import Layout from '../../components/layouts/Layout'
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

//1- Connect to contentful (penser à importer createClient)
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

//2- Generates all slugs of my projet in contentful
export async function getStaticPaths() {
  // a- recupere la data une fois que la promise success
  const res = await client.getEntries({ content_type: "projets" });

  // b- Get all slugs
  const slugs = res.items.map((slug)=> {
    return {
      params: { slug: slug.fields.slug },
    };    
  });    
    
    // c- renvoie tous les slugs dans path
  return {
    paths: slugs,
    fallback: false, // can also be true or 'blocking'
  };
};

// 3- Recupere data du show en fonction du slug
export async function getStaticProps({params}) {
  // console.log("context", context);
  // a- recupere la data une fois que la promise success
  const res = await client.getEntries({ 
    content_type: "projets", 
    "fields.slug":params.slug,
    });

    // b- je stock la data dans variable projet
    const projet = res.items;

  return {
    // Passed to the page component as props
    props: { projet: projet[0] },
  };
}


export default function show({projet}) {
    console.log("projet:", projet.fields);
    const {title, description, roles, skills, urlDuProjet, images, featuredImage} = projet.fields;
    
  return (
    <Layout
      title={title}
      metaContent={`Le projet ${title} est un projet fait avec laravel et react`}
      image={`http:${featuredImage.fields.file.url}`}
    >
      <main className="px-20 py-16">
        <div className="grid grid-cols-2 items-center gap-6 ">
          <div className="">
            <div className="pr-10">
              <p className="text-3xl font-black text-center pb-10">
                {projet.fields.title}
              </p>
              <div className="">{documentToReactComponents(description)}</div>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt, voluptate? Error, culpa fugiat voluptatum explicabo
                quo incidunt expedita laborum quibusdam non, voluptate
                assumenda. Hic, iusto! Iusto veniam architecto commodi!
              </p> */}
            </div>
            {/* Rôles */}
            <div className="pt-5">
              <p className="text-indigo-500 uppercase underline underline-offset-4">
                Rôle:
              </p>
              <ul className="italic">
                {roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
                {/* <li className="">Développeur Front React</li> */}
              </ul>
            </div>
            {/* Stack */}
            <div className="pt-5">
              <p className="text-indigo-500 uppercase underline underline-offset-4">
                stack:
              </p>
              <ul className="italic">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
                {/* <li className="">Laravel</li> */}
                {/* <li className="">Tailwindcss</li> */}
                {/* <li className="">font awesome</li> */}
                {/* <li className="">Développeur Front React</li> */}
              </ul>
            </div>
            <a
              href={urlDuProjet}
              rel="noreferrer"
              target='_blank'
              className="border-2 border-indigo-500 p2 mt-4"
            >
              Voir le projet
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.fields.file.url}
                alt={`Stephane Bilella portfolio ${title}`} //améliore le référencement
              />
            ))}
            {/* <img src="img/1.jpg" alt="titre du projet" /> */}
            {/* <img src="img/1.jpg" alt="titre du projet" />
            <img src="img/1.jpg" alt="titre du projet" /> */}
          </div>
        </div>
      </main>
    </Layout>
  );
}
