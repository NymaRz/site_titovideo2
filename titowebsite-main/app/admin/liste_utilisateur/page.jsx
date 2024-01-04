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

    const updateUserRole = async (id, role) => {
        try {
            const res = await fetch(`http://localhost:3000/api/update_user/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ role }), // Met à jour le rôle
            });

            if (!res.ok) {
                throw new Error("Échec de la mise à jour de l'utilisateur");
            }

            await loadUsers(); // Recharge la liste des utilisateurs après la mise à jour
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'utilisateur: ", error);
        }
    };

    const handleDeleteClick = (id) => {
        setSelectedUserId(id);
        setDeleteConfirmOpen(true);
    };

    const confirmDelete = async () => {
        await deleteUser(selectedUserId);
        setDeleteConfirmOpen(false);
    };

    const handleRoleChange = (event) => {
        setNewRole(event.target.value);
    };

    const confirmUpdateRole = async () => {
        await updateUserRole(selectedUserId, newRole);
        setIsUpdateRoleOpen(false);
    };

    return (
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
                        <thead>
                        <tr>
                            <th>Email</th>
                            <th>Rôle</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Button onClick={() => handleDeleteClick(user._id)}>Supprimer</Button>
                                    <Button onClick={() => { setSelectedUserId(user._id); setIsUpdateRoleOpen(true); }}>Modifier le rôle</Button>
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
                            <MenuItem value="user">User</MenuItem>
                            <MenuItem value="administrateur">Administrateur</MenuItem>
                            <MenuItem value="monteur">Monteur</MenuItem>
                        </Select>
                    </FormControl>
                    <Button onClick={() => setIsUpdateRoleOpen(false)}>Annuler</Button>
                    <Button onClick={confirmUpdateRole} autoFocus>Confirmer</Button>
                </DialogActions>
            </Dialog>
        </section>
    );
}
