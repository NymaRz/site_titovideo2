"use client"
import SectionTitle from '@/components/Common/SectionTitle';

import Link from 'next/link';
import {signOut} from "next-auth/react";
import AdminLayout from "@/app/adminLayout";
import {useState} from "react";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    cv: string;
}



export default function UsersTable() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (


        <>
            <section id="portfolio" className="relative z-10 py-36 md:py-40 lg:py-28">

                <section id="portfolio" className="relative z-10 py-36 md:py-40 lg:py-28">
                    <SectionTitle
                        title="Bienvenue sur votre page admin"
                        paragraph="Vous pouvez suivre l'avançement de vos commandes ici."
                        center
                        width="700px"/>

                    <div className="container py-12">

                        <div className="flex items-center justify-center pr-16 lg:pr-0">
                            <div style={{width: '40px'}}/>
                            <Link
                                href="/admin/commande_id" // Remplacez par l'URL réelle de la page de commandes de l'administration
                                className="ease-in-up rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                            >
                                Vos Commandes
                            </Link>

                            <div style={{width: '20px'}}/>

                            <Link
                                href="/tarifs" // Remplacez par l'URL réelle de la page des tarifs
                                className="ease-in-up rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                            >
                                Nos Offres
                            </Link>
                        </div>
                    </div>
                </section>
            </section>

        </>


);
}