import React from 'react';
import './propos.css';
const Propos = () => {

    // @ts-ignore
    return (
        <>

        <section id="about" className="relative z-10 py-36 md:py-40 lg:py-28 mt-11">

        <div className="px-4 xl:container">

            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
            Une Agence Bretonne Ivoirienne
            </h1>

            <div className="flex flex-col items-center justify-center mt-10 md:flex-row md:space-x-10">
                <img
                    src="/images/hero/shape-01.svg"
                    alt="illustration"
                    className="absolute top-0 right-0 z-0 hidden w-64 lg:w-1/2 lg:block"
                />
            <div className="flex flex-col items-center justify-center w-full ">
                <video width={500} height={500} controls className="rounded-lg shadow-lg">
                    <source src="/images/tito%20video.mp4"
                            type="video/mp4"/>

                </video>


            </div>
            <div className="flex flex-col items-start justify-center w-full mt-10 md:mt-0">

                <p className="mt-4 text-base text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl">
                    Je m'appelle Francesca et j'ai fondé Titovideo en aout 2022. Originaire de cote d'ivoire, c'est à 21ans que je me décide de me lancer dans l'aventure entrepreneuriale.
                </p>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl">
                D'abord dédié aux createurs de contenus, ma mission est simple: démocratiser la vente de service de montage vidéo en rendant l'offre accessible et personnnalisée.
                </p>
            </div>
            </div>
        </div>
                </section>


                <section className="relative z-10 py-36 md:py-40 lg:py-28 mt-11">
                    <div className="px-4 xl:container">
                        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
                            Une Agence de Montage
                        </h1>

                        <div className="flex flex-col items-center justify-center mt-10 md:flex-row md:space-x-10">
                            <div className="flex flex-col items-center justify-center w-full ">
                                <img
                                    src="/images/pexels-pixabay-257904.jpg"
                                    alt="illustration"
                                    className="w-full h-auto max-w-md mx-auto rounded-lg shadow-l"
                                />
                            </div>
                            <div className="flex flex-col items-start justify-center w-full mt-10 md:mt-0">

                                <p className="mt-4 text-base text-gray-500 dark:text-gray-400 md:text-xl lg:text-2xl">
                                    La video a entièrement changé le business. Et tous vos concurrents l’utilisent depuis longtemps (86% des entreprises utilisent la vidéo comme outil marketing). Titovideo, c’est une agence composé de 22 monteurs spécialisées avec un objectif : vous aider à créer des vidéos inoubliables pour toucher votre audience.Une Agence Photo Titovideo, c’est également 8 photographes professionnelles près à transformer tous vos plus beaux moments en événements inoubliables.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>











        </>
    );



}



export default Propos;