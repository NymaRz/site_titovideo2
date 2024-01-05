"use client"
import React, {useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import Link from 'next/link'; // Importez le composant Link
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import SectionTitle from '@/components/Common/SectionTitle';

export default function BasicTable() {
    const [commandes, setCommandes] = useState([]);
    const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [selectedCommandeId, setSelectedCommandeId] = useState(null);
    const [isUpdateConfirmOpen, setUpdateConfirmOpen] = useState(false);
    const [updateEtat, setUpdateEtat] = useState('');

    useEffect(() => {
        const loadCommandes = async () => {
            const data = await getMessages();
            if (data && data.commande) {
                const commandesEnCours = data.commande.filter(c => c.etat === 'En cours' || c.etat === 'Pause');
                setCommandes(commandesEnCours);
            }
        };
        loadCommandes();
    }, []);

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

    const updateCommande = async (id, etat) => {
        try {
            const response = await fetch(`/api/updated_commande/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({NewEtat: etat}), // Send the new state as JSON
            });

            if (!response.ok) {
                throw new Error("Failed to update commande");
            }

            const data = await response.json(); // Parse the JSON response
            return data;
        } catch (error) {
            console.error("Error updating commande: ", error);
        }
    };
    const handleUpdateClick = (id, newEtat) => {
        setSelectedCommandeId(id);
        setUpdateEtat(newEtat);
        setUpdateConfirmOpen(true);
    };
    const confirmUpdate = async () => {
        const data = await updateCommande(selectedCommandeId, updateEtat);
        if (data && data.updatedCommande) {
            setCommandes((prevCommandes) =>
                prevCommandes.map((commande) =>
                    commande._id === selectedCommandeId
                        ? {...commande, etat: updateEtat}
                        : commande
                )
            );
        }
        setUpdateConfirmOpen(false);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <>
            {/* Ajout d'un bouton de redirection vers la page des commandes en cours */}
            <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">
                <SectionTitle
                    title="Bienvenue sur la page admin"
                    paragraph="Vous avez accès en temps réel aux demandes des clients"
                    center
                    width="635px"
                />
                <div className="container mx-auto text-center mb-7 pr-7 d-flex justify-content-center">
                    <Link href="/admin/commandes" passHref>
                        <Button variant="contained" color="primary" style={{marginRight: '15px'}}>
                            Voir les toutes les commandes
                        </Button>
                    </Link>
                    <Link href="/admin/commandes_terminees" passHref>
                        <Button variant="contained" color="primary">
                            Voir les commandes terminées
                        </Button>
                    </Link>
                </div>
                <div className="container px-4 mx-auto">
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse w-full">
                            <thead>
                            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                                <th className="px-4 py-2 bg-gray-200">Email</th>
                                <th className="px-4 py-2">Format</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Telephone</th>
                                <th className="px-4 py-2">Date</th>
                                <th className="px-4 py-2">Etat</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="text-sm font-normal text-gray-700">
                            {commandes.map((commande) => (
                                <tr
                                    key={commande._id}
                                    className="hover:bg-gray-100 border-b border-gray-200 py-4"
                                >
                                    <td className="px-4 py-2">{commande.email}</td>
                                    <td className="px-4 py-2">{commande.selectedChoice}</td>
                                    <td className="px-4 py-2">{commande.sound}</td>
                                    <td className="px-4 py-2">{commande.telephone}</td>
                                    <td className="px-4 py-2">{formatDate(commande.date)}</td>
                                    <td className="px-4 py-2">{commande.etat}</td>
                                    <td className="flex px-4 py-2 space-x-2">
                                        {commande.etat === 'Terminée' ? (
                                            <div>
                                                <p>Commande Terminée</p>
                                                <p>Date de Dernier Changement: {formatDate(commande.updatedAt)}</p>
                                            </div>
                                        ) : (
                                            <>
                                                {commande.etat === 'Pause' && (
                                                    <Button
                                                        variant="contained"
                                                        className="bg-yellow-500 hover:bg-yellow-600 text-white"
                                                        onClick={() => handleUpdateClick(commande._id, 'En cours')}
                                                    >
                                                        Reprendre
                                                    </Button>
                                                )}
                                                {commande.etat === 'En cours' && (
                                                    <Button
                                                        variant="contained"
                                                        className="bg-red-500 hover:bg-red-600 text-white"
                                                        onClick={() => handleUpdateClick(commande._id, 'Pause')}
                                                    >
                                                        En pause
                                                    </Button>
                                                )}
                                                {commande.etat === 'En cours' && (
                                                    <Button
                                                        variant="contained"
                                                        className="bg-red-500 hover:bg-red-600 text-white"
                                                        onClick={() => handleUpdateClick(commande._id, 'Terminée')}
                                                    >
                                                        Terminée
                                                    </Button>
                                                )}
                                            </>
                                        )}
                                    </td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Dialog
                open={isUpdateConfirmOpen}
                onClose={() => setUpdateConfirmOpen(false)}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmer la mise à jour de la commande ?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setUpdateConfirmOpen(false)}>Non</Button>
                    <Button onClick={confirmUpdate} autoFocus>
                        Oui
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Update confirmation dialog */}
            <Dialog
                open={isUpdateConfirmOpen}
                onClose={() => setUpdateConfirmOpen(false)}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmer la mise à jour de la commande ?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setUpdateConfirmOpen(false)}>Non</Button>
                    <Button onClick={confirmUpdate} autoFocus>
                        Oui
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}