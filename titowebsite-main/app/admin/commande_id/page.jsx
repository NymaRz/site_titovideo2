"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import SectionTitle from '@/components/Common/SectionTitle';
function Commande({userId}) {
    const [commandes, setCommandes] = useState([]);
    useEffect(() => {
        async function getMessages() {
            try {
                const response = await fetch('/api/commandes_id/${userId}', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });


                const data = await response.json();
                setCommandes(data.commandes);
            } catch (error) {
                console.log(error);


}
        }
        getMessages().then(r => console.log(r));
    }, [userId]);
    return (


        <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">

            <SectionTitle
                title="Bienvenue sur la page admin"
                paragraph="Vous avez accès en temps réel aux demandes des clients"
                center
                width="635px"
            />
            <div className="container px-4 mx-auto">
                <TableContainer  className="bg-white shadow-md rounded my-6">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className="bg-gray-50 dark:bg-gray-800">
                            <TableRow>

                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Musique</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Style</TableCell>
                                <TableCell align="right">Format</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {commandes.map((t) => (
                                <TableRow
                                    key={t._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">

                                    </TableCell>
                                    <TableCell  >{t.email}</TableCell>
                                    <TableCell>{t.sound}</TableCell>
                                    <TableCell>{t.date}</TableCell>
                                    <TableCell align="right">{t._id}</TableCell>
                                    <TableCell align="right">{t.selectedChoice}</TableCell>
                                    <TableCell align="right">{t.selectedStyle}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );

}

export default Commande;