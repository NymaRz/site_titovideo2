"use client"
import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import SectionTitle from '@/components/Common/SectionTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Link from "next/link";
import CheckIcon from '@mui/icons-material/Check'; // Importer l'icône Check
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

CloseIcon
export default function UsersManagement() {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [isUpdateRoleOpen, setIsUpdateRoleOpen] = useState(false);
    const [newRole, setNewRole] = useState('');

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/user_id", {
                method: "GET",
            });

            if (!res.ok) {
                throw new Error("Échec du chargement des utilisateurs");
            }

            const data = await res.json();
            setUsers(data.users); // Assurez-vous que l'API renvoie un objet avec une clé 'users'
        } catch (error) {
            console.error("Erreur lors du chargement des utilisateurs: ", error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/delete_user/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Échec de la suppression de l'utilisateur");
            }

            await loadUsers(); // Recharge la liste des utilisateurs après la suppression
        } catch (error) {
            console.error("Erreur lors de la suppression de l'utilisateur: ", error);
        }
    };

        const updateUserRole = async (id, newRole) => {
            try {
                const response = await fetch(`/api/update_user/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ NewRole: newRole }),
                });

                if (!response.ok) {
                    throw new Error("Failed to update user role");
                }

                const data = await response.json();
                return data;
            } catch (error) {
                console.error("Error updating user role: ", error);
            }
        };



    const handleRoleChange = (event) => {
        setNewRole(event.target.value);
    };

    const handleDeleteClick = (id) => {
        setSelectedUserId(id);
        setDeleteConfirmOpen(true);
    };

    const confirmDelete = async () => {
        await deleteUser(selectedUserId);
        setDeleteConfirmOpen(false);
    };

    const handleRoleUpdate = (id) => {
        const user = users.find(u => u._id === id);
        if (user) {
            setNewRole(user.role); // Assurez-vous que user.role est l'une des valeurs valides
        } else {
            setNewRole(''); // ou une autre valeur par défaut
        }
        setSelectedUserId(id);
        setIsUpdateRoleOpen(true); // Ouvrir le dialogue de confirmation
    };

    const confirmRoleUpdate = async () => {
        try {
            const response = await updateUserRole(selectedUserId, newRole);
            if (response && response.ok) {
                // Mise à jour immédiate de l'état local
                setUsers(users.map((user) =>
                    user._id === selectedUserId ? { ...user, role: newRole } : user
                ));
            } else {
                console.error("La mise à jour du rôle a échoué");
                // Optionnel: Recharger les utilisateurs depuis le serveur
                loadUsers();
            }
        } catch (error) {
            console.error("Erreur lors de la mise à jour du rôle:", error);
            // Optionnel: Recharger les utilisateurs depuis le serveur
            loadUsers();
        }
        setIsUpdateRoleOpen(false);
    };







    return (
        <>
            <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">
                <h2 className="text-3xl text-center mb-7">Bienvenue sur la page gestion des utilisateurs</h2>
                <div className="container mx-auto text-center mb-7 pr-7 flex justify-center">
                    <Link href="/admin/commandes" passHref>
                        <Button variant="contained" color="primary" style={{ marginRight: '15px' }}>
                            Voir toutes les commandes
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
                            <thead className="rounded-lg text-sm font-medium text-gray-700 text-left">
                            <tr>
                                <th className="px-4 py-2 bg-gray-200">Email</th>
                                <th className="px-4 py-2">Rôle</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="text-sm font-normal text-gray-700">
                            {users.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-100 border-b border-gray-200 py-4">
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.role}</td>
                                    <td className="flex px-4 py-2 space-x-2">
                                        <Button onClick={() => handleDeleteClick(user._id)}><DeleteIcon   /></Button>
                                        <Button onClick={() => handleRoleUpdate(user._id)}><EditIcon  /></Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Dialog pour la suppression */}
                <Dialog open={isDeleteConfirmOpen} onClose={() => setDeleteConfirmOpen(false)}>
                    <DialogTitle>{"Confirmer la suppression de l'utilisateur ?"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={() => setDeleteConfirmOpen(false)}>Non</Button>
                        <Button onClick={confirmDelete} autoFocus>Oui</Button>
                    </DialogActions>
                </Dialog>
                {/* Dialog pour la mise à jour du rôle */}
                <Dialog
                    open={isUpdateRoleOpen}
                    onClose={() => setIsUpdateRoleOpen(false)}
                    maxWidth="md"
                    fullWidth={true}
                >
                    <DialogTitle>{"Modifier le rôle de l'utilisateur"}</DialogTitle>
                    <DialogActions>
                        <FormControl style={{ width: '100%', maxWidth: '300px' }}>
                            <InputLabel>Rôle</InputLabel>
                            <Select
                                value={newRole}
                                label="Rôle"
                                onChange={handleRoleChange}
                            >
                                <MenuItem value="user">Utilisateur</MenuItem>
                                <MenuItem value="administrateur">Administrateur</MenuItem>
                                <MenuItem value="monteur">Monteur</MenuItem>
                            </Select>
                        </FormControl>
                        <Button onClick={() => setIsUpdateRoleOpen(false)}><CloseIcon  /></Button>
                        <Button onClick={confirmRoleUpdate} autoFocus>
                            <CheckIcon />
                        </Button>                    </DialogActions>
                </Dialog>
            </section>
        </>
    );
}