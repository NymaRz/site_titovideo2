"use client";

import './globals.css'
import {Inter} from 'next/font/google'
import {NextAuthProvider} from "./Providers";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const inter = Inter({subsets: ['latin']})
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ScrollToTop from "@/components/ScrollToTop";
import React, {useEffect, useState} from "react";

const stripePromise = loadStripe('pk_test_oKhSR5nslBRnBZpjO6KuzZeX');


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    // Utilisez le state pour suivre la valeur de hideHeaderAndFooter
    const [hideHeaderAndFooter, setHideHeaderAndFooter] = useState(false);

    // Utilisez useEffect pour accéder à window.location.pathname une fois que le composant est monté
    useEffect(() => {
        setHideHeaderAndFooter(window.location.pathname === '/admin_client' || window.location.pathname === '/admin');
    }, []);

    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head>
            <title>Titovideo</title>
        </head>
        <body className="dark:bg-black">
        <NextAuthProvider>
            <Elements stripe={stripePromise}>
                {!hideHeaderAndFooter && <Header/>}
                {children}
            </Elements>
            <ScrollToTop/>
            {!hideHeaderAndFooter && <Footer/>}
        </NextAuthProvider>
        </body>
        </html>
    );
}