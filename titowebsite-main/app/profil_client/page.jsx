
"use client"
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

// pages/profile.js
import React from 'react';


const profil_client = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/commandes_id`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch messages");
        }

        return await res.json();
    } catch (error) {
        throw new Error(error.message);
    }
}
 export default function Profil_client() {
    const { data: session } = useSession();
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        profil_client()
            .then((data) => {
                const filteredCommandes = data.commande.filter(
                    (commande) => commande.email === session?.user?.email
                );
                setCommandes(filteredCommandes);
            })
            .catch((error) => {
                console.error("Error fetching commandes:", error);
            });
    }, [session]);

    return (
        <div className="min-h-screen bg-gray-100 mt-16">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4 text-center mt-20">Page Profil Client</h1>
                <h2 className="text-xl mb-6 text-center">Bienvenue {session?.user?.name}</h2>

                <div className="w-full md:w-3/4 lg:w-1/2 shadow-lg rounded-lg p-4 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold mb-2 md:mb-0">Vos Informations</h2>
                    </div>

                    <div className="flex flex-col">
                        {commandes.map((commande) => (
                            <div
                                key={commande.id}
                                className="flex flex-col md:flex-row justify-between items-center py-2 border-b border-gray-300"
                            >
                                <div className="flex items-center mb-2 md:mb-0">
                                    <div className="w-20 h-20 overflow-hidden rounded-full">
                                        <img
                                            src={commande.image}
                                            alt="avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-4">
                                        <p className="text-lg font-bold">Votre pseudo: {commande.name}</p>
                                        <p className="text-lg font-bold">Votre Email: {commande.email}</p>
                                        <p className="text-lg font-bold">Vos Titopoints: {commande.tito}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-600">{commande.created_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    );
 }
