"use client"
import Burger from '../../admin_client/burger'
import * as React from 'react';
import {getSession} from 'next-auth/react'
import SectionTitle from '@/components/Common/SectionTitle';
import Button from "@mui/material/Button";
import {useState} from 'react';

const getMessages = async () => {
    try {
        const res = await fetch(`http://localhost:3000/tarifs/api/commande`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch messages");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading messages: ", error);
    }
};

//supprimer une commande delete_command

const delete_command = async (id, setCommandes) => {
    try {
        const endpoint = `http://localhost:3000/api/commandes/${id}`;
        const res = await fetch(endpoint, {
            method: "DELETE",
        });

        if (res.ok) {
            setCommandes((prev) => prev.filter((commande) => commande._id !== id));
        } else {
            const errorData = await res.json();
            alert(errorData.message || "Erreur lors de la suppression de la commande");
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de la commande: ", error);
    }
};


//TODO: mettre à jour le status de la commande

/*  Const updateCommande = async (id) => {
      try {
        const res = await fetch(`http://localhost:3000/api/update_status`, {
          method: "PATCH",
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to update message");
        }

        return res.json();
      } catch (error) {
        console.log("Error updating message: ", error);
      }

  }
*/
export default async function BasicTable() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    const {commande} = await getMessages();

    return (
        <>


            <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">

                <img
                    src="/images/hero/shape-01.svg"
                    alt="illustration"
                    className="absolute top-0 right-0 z-[2] hidden w-64 lg:w-1/2 lg:block -mt-20 -mr-32"/>

                <SectionTitle
                    title="Bienvenue sur la page admin"
                    paragraph="Vous avez accès en temps réel aux demandes des clients"
                    center
                    width="635px"/>

                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full mb-12 px-4">
                            <div className="overflow-x-auto">
                                <table className="table-auto border-collapse w-full">
                                    <thead>
                                    <tr className="rounded-lg text-sm font-medium text-gray-700 text-left"
                                        style={{fontSize: "0.9674rem"}}>
                                        <th className="px-4 py-2 bg-gray-200">Email</th>
                                        <th className="px-4 py-2">Format</th>
                                        <th className="px-4 py-2">Description</th>
                                        <th className="px-4 py-2">Type de prestation</th>
                                        <th className="px-4 py-2">Etat</th>
                                        <th className="px-4 py-2">Actions</th>
                                        {/* Ajout d'une colonne pour les actions */}
                                    </tr>
                                    </thead>
                                    <tbody className="text-sm font-normal text-gray-700">
                                    <img
                                        src="/images/hero/shape-02.svg"
                                        alt="illustration"
                                        className="absolute bottom-0 left-0  hidden w-64 lg:w-1/2 lg:block -mb-20 -ml-32"/>
                                    {commande.map((commande) => (
                                        <tr key={commande.id}
                                            className="hover:bg-gray-100 border-b border-gray-200 py-4">
                                            <td className="px-4 py-2">{commande.email}</td>
                                            <td className="px-4 py-2">{commande.selectedChoice}</td>
                                            <td className="px-4 py-2">{commande.sound}</td>
                                            <td className="px-4 py-2">{commande.telephone}</td>
                                            <td className="px-4 py-2">{commande.date}</td>
                                            <td className="px-4 py-2">{commande.etat}</td>
                                            <td className="flex px-4 py-2 space-x-2">
                                                <Button variant="contained"
                                                        className="bg-red-500 hover:bg-red-600 text-white"
                                                        onClick={() => delete_command(commande._id)}>
                                                    Supprimer
                                                </Button>
                                                <Button variant="contained"
                                                        className="bg-green-500 hover:bg-green-600 text-white"
                                                        onClick={() => updateCommande(commande.id)}>
                                                    Valider
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
