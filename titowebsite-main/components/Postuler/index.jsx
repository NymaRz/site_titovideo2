import { useState } from 'react';
import React from 'react';
import {error} from "next/dist/build/output/log";

const PostForm = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [selectedChoice, setSelectedChoice] = useState('');
    const handleChoiceChange = (choice) => {
        setSelectedChoice(choice);
      };

    const [emaildata, setEmaildata] = useState({
        to: "",
        subject: "",
        text: "",
        name: "",
        email: "",
        phone: "",
        poste: "",
        cv: "",

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmaildata({ ...emaildata, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //envoyer les données au serveur
        try {
            const response = await fetch("http://localhost:5000/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(emaildata),
            });
            const data = await response.json();
            if (response.ok) {
                alert("Message envoyé");
                console.log("message envoyé");
            }else {
                alert("Message non envoyé");
                console.log("message non envoyé");
            }
        } catch (error) {
            console.log(error);
        }
    };



  return (
    <form onSubmit={handleSubmit} className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[5px] lg:pb-28">
    <div className="container">
    <div className="flex justify-center items-center h-screen">
    <div
      className="wow fadeInUp rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
      data-wow-delay=".15s"
    >
      <h2 className="text-2xl font-bold mb-4">Formulaire</h2>
      
      <form>
      <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nom & Prénom</label>
          <input
            type="text"
            placeholder='John Doe'
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder='johndoe@gmail.com'
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Téléphone</label>
          <input
            type="text"
            placeholder='+33 0754679804'
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Poste</label>
          <select
             className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            value={selectedChoice}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="">Choississez un Poste</option>
            <option value="1">Monteur Freelance</option>
            <option value="2">Community Manager</option>
            <option value="3">Développeur Web</option>
            <option value="4">Responsable Administratif et Financier</option>
            <option value="5">Alternance</option>
            <option value="6">Stage</option>
              required
          </select>
        </div>
        <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">CV</label>
                <input  className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" id="multiple_files" type="file" multiple />

        </div>

        <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Tes derniers projets</label>
                <input  className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" id="multiple_files" type="file" multiple />

        </div>

        <div className="w-full px-4">
            <button type="submit" className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                Postuler
            </button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </form>
  );
}

export default PostForm;
