"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';
function Success() {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <h1 className="text-3xl font-bold">Votre formulaire à bien été envoyé</h1>

            <h2>Laissez votre avis</h2>
            <Rating
                count={5}
                onChange={handleRatingChange}
                size={24}
                activeColor="#ffd700"
            />
            <p>Votre note : {rating}</p>

            <Link href="/"
                  className="ease-in-up rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"

            >
                Retourner à la page d'accueil


            </Link>
        </div>

    );
}

export default Success;