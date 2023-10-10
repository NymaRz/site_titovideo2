"use client"
import Breadcrumb from '@/components/Common/Breadcrumb';
import PostForm from '@/components/Postuler';
import React from 'react';
import { useState } from "react";
import { useRouter } from "next/navigation";

const postuler = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setPhone] = useState("");
  const [poste, setPoste] = useState("");
  const [cv, setCv] = useState("");
  const [projets, setProjets] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !telephone || !poste ) {
      alert("Tous les champs sont requis.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/postuler", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({  username, email,telephone,poste,cv,projets }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to postulate");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
        <Breadcrumb pageName={'Postuler'} description={"Réjoignez nous dès maintenant"} />
        <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[5px] lg:pb-28">
    <div className="container">
    <div className="flex justify-center items-center h-screen">
    <div
      className="wow fadeInUp rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
      data-wow-delay=".15s"
    >
      <h2 className="text-2xl font-bold mb-4">Formulaire</h2>
      
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nom & Prénom</label>
          <input
           onChange={(e) => setUsername(e.target.value)}
           value={username}
           type="text"
           placeholder='Nom & Prénom'
           className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder='Email'
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Téléphone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={telephone}
            type="text"
            placeholder='Votre numéro'
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Poste</label>
          <select
             className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            value={poste}
            onChange={(e) => setPoste(e.target.value)}
          >
            <option value="">Choississez un Poste</option>
            <option value="Monteur Freelance">Monteur Freelance</option>
            <option value="Community Manager">Community Manager</option>
            <option value="Développeur Web">Développeur Web</option>
            <option value="Responsable Administratif et Financier">Responsable Administratif et Financier</option>
            <option value="Alternance">Alternance</option>
            <option value="Stage">Stage</option>
          </select>
        </div>
        <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">CV</label>
                <input  
                 value={cv}
                 onChange={(e) => setCv(e.target.value)}
                className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" id="multiple_files" type="file" multiple />

        </div>

        <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Tes derniers projets</label>
                <input  
                 value={projets}
                 onChange={(e) => setProjets(e.target.value)}
                className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" id="multiple_files" type="file" multiple />

        </div>

        <div className="w-full px-4">
            <button 
             type="submit"
            className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                Postuler
            </button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </section>
      
    </div>
  );
}

export default postuler;
