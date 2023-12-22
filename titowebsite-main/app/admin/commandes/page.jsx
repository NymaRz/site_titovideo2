"use client"
import React, {useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
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
            setCommandes(data.commande);
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

    const deleteCommande = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/delete_commande/${id}`, {
                method: "DELETE",
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to delete commande");
            }

            return res.json();
        } catch (error) {
            console.log("Error deleting commande: ", error);
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
    const handleDeleteClick = (id) => {
        setSelectedCommandeId(id);
        setDeleteConfirmOpen(true);
    };

    const confirmDelete = async () => {
        await deleteCommande(selectedCommandeId);
        setCommandes((prevCommandes) =>
            prevCommandes.filter((commande) => commande._id !== selectedCommandeId)
        );
        setDeleteConfirmOpen(false);
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
            <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">
                <SectionTitle
                    title="Bienvenue sur la page admin"
                    paragraph="Vous avez accès en temps réel aux demandes des clients"
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
                                        <Button
                                            variant="contained"
                                            className="bg-red-500 hover:bg-red-600 text-white"
                                            onClick={() => handleDeleteClick(commande._id)}
                                        >
                                            Supprimer
                                        </Button>
                                        <Button
                                            variant="contained"
                                            className="bg-red-500 hover:bg-red-600 text-white"
                                            onClick={() => handleUpdateClick(commande._id, 'En cours')} // Utilisez 'En cours' comme nouvelle valeur d'état
                                        >
                                            Valider
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Dialog
                open={isDeleteConfirmOpen}
                onClose={() => setDeleteConfirmOpen(false)}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmer la suppression de la commande ?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setDeleteConfirmOpen(false)}>Non</Button>
                    <Button onClick={confirmDelete} autoFocus>
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
