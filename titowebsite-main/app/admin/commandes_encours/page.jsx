"use client";
import React, { useState, useEffect } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';

// Fonction pour récupérer les commandes en cours
const getCommandesEnCours = async () => {
    try {
        const res = await fetch(`/api/commandes?etat=en+cours`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`Échec de la récupération des commandes en cours: statut ${res.status}`);
        }

        const result = await res.json();
        console.log(result); // Ajoutez ceci pour déboguer
        return result;
    } catch (error) {
        console.log("Erreur lors du chargement des commandes en cours: ", error);
        return {}; // Retourne un objet vide pour éviter l'erreur
    }
};

export default function CommandesEnCours() {
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        const loadCommandesEnCours = async () => {
            const data = await getCommandesEnCours();
            if (data && data.commandes) { // Vérifiez que `data` et `data.commandes` existent
                setCommandes(data.commandes);
            }
        };
        loadCommandesEnCours();
    }, []);

    return (
        <>
            <section id="commandes-encours" className="relative z-10 py-16 md:py-20 lg:py-28">
                <SectionTitle
                    title="Commandes en cours"
                    paragraph="Liste des commandes actuellement traitées"
                    center
                    width="635px"
                />

                <div className="container px-4 mx-auto">
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse w-full">
                            <thead>
                            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                                <th className="px-4 py-2 bg-gray-200">Email</th>
                                <th className="px-4 py-2">Format</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Type de prestation</th>
                                <th className="px-4 py-2">État</th>
                            </tr>
                            </thead>
                            <tbody className="text-sm font-normal text-gray-700">
                            {commandes.map((commande) => (
                                <tr key={commande._id} className="hover:bg-gray-100 border-b border-gray-200 py-4">
                                    <td className="px-4 py-2">{commande.email}</td>
                                    <td className="px-4 py-2">{commande.selectedChoice}</td>
                                    <td className="px-4 py-2">{commande.sound}</td>
                                    <td className="px-4 py-2">{commande.telephone}</td>
                                    <td className="px-4 py-2">{commande.date}</td>
                                    <td className="px-4 py-2">{commande.etat}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
