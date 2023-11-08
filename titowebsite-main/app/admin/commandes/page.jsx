"use client"
import * as React from 'react';


import {getSession} from 'next-auth/react'

import SectionTitle from '@/components/Common/SectionTitle';
import Button from "@mui/material/Button";

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
      console.log("Error loading messages: ",error);
    }
  };

    const deleteCommande = async (id) => {
        try {
          const res = await fetch(`http://localhost:3000/api/delete_command`, {
            method: "DELETE",
            cache: "no-store",
          });

          if (!res.ok) {
            throw new Error("Failed to fetch messages");
          }

          return res.json();
        } catch (error) {
          console.log("Error loading messages: ",error);
        }
        };

export default async function BasicTable (){
    const {commande}  = await getMessages();

  return (
    <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">

    <SectionTitle
      title="Bienvenue sur la page admin"
      paragraph="Vous avez accès en temps réel aux demandes des clients"
      center
      width="635px"
    />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full mb-12 px-4">
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full">
                <thead>
                  <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{fontSize: "0.9674rem"}}>
                    <th className="px-4 py-2 bg-gray-200 " style={{backgroundColor: "#f8f8f8"}}>Email</th>
                    <th className="px-4 py-2 " style={{backgroundColor: "#f8f8f8"}}>Format</th>
                    <th className="px-4 py-2 " style={{backgroundColor: "#f8f8f8"}}>Description</th>
                    <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Type de prestation</th>

                    </tr>
                </thead>
                <tbody className="text-sm font-normal text-gray-700">
                {commande.map((commande) => (
                  <tr key={commande.id} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                    <td className="px-4 py-4">{commande.email}</td>
                    <td className="px-4 py-4">{commande.selectedChoice}</td>
                    <td className="px-4 py-4">{commande.sound}</td>
                    <td className="px-4 py-4">{commande.telephone}</td>
                    <td className="px-4 py-4">{commande.adresse}</td>
                    <td className="px-4 py-4">{commande.codepostal}</td>
                    <td className="px-4 py-4">{commande.ville}</td>
                    <td className="px-4 py-4">{commande.pays}</td>
                    <td className="px-4 py-4">{commande.date}</td>
                    <td className="px-4 py-4">{commande.heure}</td>
                    <td className="px-4 py-4">{commande.typeprestation}</td>
                    <Button variant="contained" className="bg-red-500 hover:bg-red-600 text-white" onClick={() => deleteCommande(commande.id)}>
                        Supprimer
                    </Button>

                    <Button variant="contained" className="bg-green-500 hover:bg-green-600 text-white">
                        Valider
                    </Button>
                  </tr>
                ))}
                </tbody>
                </table>

            </div>
            </div>
            </div>
            </div>
            </section>

  );
}
