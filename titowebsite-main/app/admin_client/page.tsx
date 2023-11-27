"use client"
import SectionTitle from '@/components/Common/SectionTitle';

import Burger from "./burger";
import Menu from "./menu";
import Link from 'next/link';
import {signOut} from "next-auth/react";
import AdminLayout from "@/app/adminLayout";
import React, {useState} from "react";
import "./style.css";



const useOnClickOutside = (ref: unknown, handler: unknown) => {
    React.useEffect(() => {
        const listener = (event: unknown) => {
            // Do nothing if clicking ref's element or descendent elements
            // @ts-ignore
            if (!ref || !handler || ref?.current?.contains(event?.target)) {
                return;
            }

            // @ts-ignore
            handler(event);
        };

        document.addEventListener(`mousedown`, listener);
        document.addEventListener(`touchstart`, listener);

        return () => {
            document.removeEventListener(`mousedown`, listener);
            document.removeEventListener(`touchstart`, listener);
        };
    }, [ref, handler]);
}


export default function UsersTable() {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    useOnClickOutside(node, () => setOpen(false));

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (


        <>




            <div className="flex flex-col items-center justify-center w-full mt-10 md:mt-0">
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
                        <div ref={node}>
                            <Burger open={open} setOpen={setOpen} />
                            <Menu open={open} setOpen={setOpen} />
                        </div>
                    </div>
                </div>



        </>


);
}