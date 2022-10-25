import React from 'react'
import Layout from '../../components/layouts/Layout'

export default function show() {
  return (
    <Layout>
        <main className="px-20 py-16">
            <div className="grid grid-cols-2 items-center gap-6 ">
                <div className="">
                    <div className="pr-10">
                        <p className='text-3xl font-black text-center pb-10'>Titre du projet</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, voluptate? Error, culpa fugiat voluptatum explicabo quo incidunt expedita laborum quibusdam non, voluptate assumenda. Hic, iusto! Iusto veniam architecto commodi!</p>
                    </div>
                    {/* Rôles */}
                    <div className="pt-5">
                        <p className="text-indigo-500 uppercase underline underline-offset-4">Rôle:</p>
                        <ul className="italic">
                            <li className="">Développeur Front React</li>
                        </ul>
                    </div>
                    {/* Stack */}
                    <div className="pt-5">

                        <p className="text-indigo-500 uppercase underline underline-offset-4">stack:</p>
                        <ul className="italic">
                            <li className="">Laravel</li>
                            <li className="">Tailwindcss</li>
                            <li className="">font awesome</li>
                            <li className="">Développeur Front React</li>
                        </ul>

                    </div>
                    <a href="#" className="border-2 border-indigo-500 p2 mt-4">Voir le projet</a>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <img src="img/1.jpg" alt="titre du projet" />
                    <img src="img/1.jpg" alt="titre du projet" />
                    <img src="img/1.jpg" alt="titre du projet" />
                </div>
            </div>
        </main>
    </Layout>
  )
}
