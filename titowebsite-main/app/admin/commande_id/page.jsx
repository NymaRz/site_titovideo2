"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {useEffect, useState} from "react";
import SectionTitle from '@/components/Common/SectionTitle';
import { useSession } from "next-auth/react";
function Commande({userId}) {
    const { data: session } = useSession();

    return (


        <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">
            <h1 className="text-2xl font-bold mb-4">Bienvenue sur la page admin  {session?.user?.name}</h1>
            <SectionTitle
                paragraph="Vous avez accès en temps réel aux demandes des clients"
                center
                width="635px"
            />
            <div className="container px-4 mx-auto">
                <TableContainer  className="bg-white shadow-md rounded my-6">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className="bg-gray-50 dark:bg-gray-800">
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell >Email</TableCell>
                                <TableCell >Sound</TableCell>
                                <TableCell >Date</TableCell>
                                <TableCell align="right">Id</TableCell>
                                <TableCell align="right">selectedChoice</TableCell>
                                <TableCell align="right">selectedStyle</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        <p className="bg-black">Email {session?.user?.email}</p>
                            <p className="bg-black">Id {session?.user?.id}</p>
                            <p className="bg-black">Name {session?.user?.name}</p>
                            <p className="bg-black">Image {session?.user?.commande}</p>




                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );

}

export default Commande;