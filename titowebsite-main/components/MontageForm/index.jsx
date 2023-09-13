"use client"
import React, { useState } from 'react';
import { LuChefHat } from "react-icons/lu";
import { GiGamepad,GiVideoCamera,GiPublicSpeaker} from "react-icons/gi";
import {PiCameraDuotone} from "react-icons/pi";
import {MdEvent} from "react-icons/md";
import { loadStripe } from '@stripe/stripe-js';
import stripePromise from './stripeConfig';

const MontageForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedChoice, setSelectedChoice] = useState('');
  const [switchValue, setSwitchValue] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  const stripe = await stripePromise;
  const result = await stripe.confirmCardPayment('CLIENT_SECRET_FROM_SERVER', {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name: 'Anonymous',
      },
    },
    });
    if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
    }
    else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
            console.log("success")
        }
    }
};


  const styleVideoData = [
    {
      id: 1,
      title: "Vlog / IRL",
      icon: <GiVideoCamera className="w-6 h-6 text-green-500 mr-2" />,
      color: "#74D0F1",
    },
    {
      id: 2,
      title: "Face-Cam",
      icon: <PiCameraDuotone className="w-6 h-6 text-blue-500 mr-2" />,
      color: "#74D0F1",
    },
    {
      id: 3,
      title: "Gaming",
      icon: <GiGamepad className="w-6 h-6 text-pink-500 mr-2" />,
      color: "#74D0F1",
    },
    {
      id: 4,
      title: "Cuisine",
      icon: <LuChefHat className="w-6 h-6 text-gray-500 mr-2" />,
      color: "#74D0F1",
    },
    {
      id: 5,
      title: "Plateau",
      icon: <GiPublicSpeaker className="w-6 h-6 text-gray-500 mr-2" />,
      color: "#74D0F1",
    },
    {
      id: 6,
      title: "Event",
      icon: <MdEvent className="w-6 h-6 text-gray-500 mr-2" />,
      color: "#74D0F1",
    },
    // Ajoutez les données pour les autres styles
  ];

  const [selectedStyle, setSelectedStyle] = useState(styleVideoData[0].id);

  const handleStyleSelection = (styleId) => {
    setSelectedStyle(styleId);
  };

  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
  };

  const handleSwitchChange = () => {
    setSwitchValue((prevValue) => !prevValue);
  };

  return (
    <section className="relative z-10 overflow-hidden pt-30 pb-16 md:pb-20 lg:pt-[70px] lg:pb-28">
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
            <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
             Formulaire
            </h3>
      
      <form>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder='johndoe@gmail.com'
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          />
        </div>
        
        <div className="mb-4">
            <p className="block text-sm font-medium mb-1">Style de vidéo</p>
            <div className="grid grid-cols-3 gap-4">
              {styleVideoData.map((style) => (
                <div
                  key={style.id}
                  className={`flex items-center p-2 rounded-md cursor-pointer border ${
                    selectedStyle === style.id ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  onClick={() => handleStyleSelection(style.id)}
                  style={{ backgroundColor: selectedStyle === style.id ? style.color : 'transparent' }}
                >
                  {style.icon}
                  <span className={selectedStyle === style.id ? 'font-bold' : ''}>{style.title}</span>
                </div>
              ))}
            </div>
          </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Format de la video</label>
          <select
             className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            value={selectedChoice}
            onChange={(e) => handleChoiceChange(e.target.value)}
          >
            <option value="">Choississez un format</option>
            <option value="Vertical (9/16)">Vertical (9/16) </option>
            <option value="Carré (1/1)<">Carré (1/1)</option>
            <option value="Paysage (19/80)">Paysage (19/80)</option>
          </select>
        </div>

        <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Sous-titrage</label>

            <div className="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Oui</label>
            </div>
            <div className="flex items-center">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non</label>
            </div>

        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Bande de sons</label>
          <input
            type="text"
            placeholder='Imagine Dragons - Believer'
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          />
        </div>

        <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Chargez vos vidéos</label>
                <input  className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" id="multiple_files" type="file" multiple />

        </div>
       
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Date de Rendu souhaitée</label>
            <input
              type="date"
              className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              // Vous pouvez ajouter des attributs name et id si nécessaire
            />
        </div>

        <div className="mb-6">
              <button  className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                    Passez au paiement
              </button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    </section>

  );
};

export default MontageForm;
