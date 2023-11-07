"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {fadeIn} from '../variants';
import ParticlesContainer from "../ParticlesContainer";
import TransitionsModal from "../TransitionsModal";

const Hero : React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[100px] pb-16 md:pt-[100px] md:pb-[80px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[50px] 2xl:pb-[100px]"
      >
          <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap items-center">
      
          <div className="w-full px-3 lg:w-1/2">
           
            <div
              className="mx-auto mb-12 max-w-[530px] text-center lg:ml-0 lg:mb-0 lg:text-left"
            >
              <span
                className="wow fadeInUp mb-8 inline-block rounded-full"
                data-wow-delay=".2s">
                <TransitionsModal/>
        
                
              </span>
              <motion.h1
                className="wow 
                fadeInUp mb-5 font-heading text-2xl font-semibold dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]"
                data-wow-delay=".3s"
                variants={fadeIn('right',0.2)}
                initial='hidden'
                animate='show'
                exit='hidden' 
                      >
              Faites passer vos vidéos au niveau supérieur!
          
              </motion.h1>
             
              <p
                className="wow fadeInUp mb-12 text-base text-dark-text"
                data-wow-delay=".4s"
              >
              Profite de nos tarifs de démarrage pour tester notre service de montage vidéo personnalisée.
             
              </p>
              
              <div
                className="wow fadeInUp flex flex-wrap items-center justify-center lg:justify-start"
                data-wow-delay=".5s"
              >
                <a
                  href="tarifs"
                  className="inline-flex items-center rounded bg-primary py-[10px] px-6 font-heading text-base text-white hover:bg-opacity-90 md:py-[14px] md:px-8"
                >
                  Nos offres
                  <span className="pl-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="portfolio"
                  className="inline-flex items-center rounded py-[14px] px-8 font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="pr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path
                        d="M19.376 12.416L8.777 19.482C8.70171 19.5321 8.61423 19.5608 8.52389 19.5652C8.43355 19.5695 8.34373 19.5492 8.264 19.5065C8.18427 19.4639 8.1176 19.4003 8.07111 19.3228C8.02462 19.2452 8.00005 19.1564 8 19.066V4.934C8.00005 4.84356 8.02462 4.75482 8.07111 4.67724C8.1176 4.59966 8.18427 4.53615 8.264 4.49346C8.34373 4.45077 8.43355 4.43051 8.52389 4.43483C8.61423 4.43915 8.70171 4.46789 8.777 4.518L19.376 11.584C19.4445 11.6297 19.5006 11.6915 19.5395 11.7641C19.5783 11.8367 19.5986 11.9177 19.5986 12C19.5986 12.0823 19.5783 12.1633 19.5395 12.2359C19.5006 12.3085 19.4445 12.3703 19.376 12.416Z"
                      />
                    </svg>
                  </span>
                  Voir nos réalisations
                </a>






              </div>
            </div>
          </div>
          
          <div className="w-full px-4 lg:w-1/2">
          <ParticlesContainer />
            <div
              className="wow fadeInRight relative z-30 mx-auto h-[560px] w-full max-w-[700px] lg:ml-0"
              data-wow-delay=".3s"
            >
              <div className="mobile-responsive-container">
              
                <div className="absolute left-0 bottom-0 z-10">
              

                    <div className="mx-auto max-w-6xl px-6">
                      <div className="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
                        <div className="group relative h-96 w-[30rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                          <Image className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/images/hero/montage2.jpg" alt="" width={480} height={10}  />
                          <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                            <div className="absolute inset-x-5 bottom-6">
                              <div className="flex gap-3 text-white">
                                <svg width="48" height="48" viewBox="0 0 32 32">
                                  <path d="M11 2H2v9h2V4h7V2z" fill="currentColor" />
                                  <path d="M2 21v9h9v-2H4v-7H2z" fill="currentColor" />
                                  <path d="M30 11V2h-9v2h7v7h2z" fill="currentColor" />
                                  <path d="M21 30h9v-9h-2v7h-7v2z" fill="currentColor" />
                                  <path d="M25.49 10.13l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 6 11v10a1 1 0 0 0 .51.87l9 5a1 1 0 0 0 1 0l9-5A1 1 0 0 0 26 21V11a1 1 0 0 0-.51-.87zM16 7.14L22.94 11L16 14.86L9.06 11zM8 12.7l7 3.89v7.71l-7-3.89zm9 11.6v-7.71l7-3.89v7.71z" fill="currentColor" />
                                </svg>
                                <div>
                                  <p className="font-sembold text-xl text-gray-100">Des créations</p>
                                  <p className="font-sembold text-xl text-gray-100">sur mésure</p>
                                </div>
                              </div>
                              <div className="flex justify-end gap-3 text-gray-200">
                                <svg width="22" height="22" viewBox="0 0 512 512">
                                  <path d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z" fill="currentColor" />
                                  <path d="M207 353.8V157.4l145 98.2-145 98.2z" fill="currentColor" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 15 15"><path fill="currentColor" d="m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z" /></svg>
                                <svg width="20" height="20" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5" /></svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                          <img className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/images/hero/nikon.jpg" alt="" />
                          <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                            <div className="absolute inset-x-5 bottom-6">
                              <div className="flex gap-3 text-white">
                                <svg width="48" height="48" viewBox="0 0 32 32">
                                  <path d="M11 2H2v9h2V4h7V2z" fill="currentColor" />
                                  <path d="M2 21v9h9v-2H4v-7H2z" fill="currentColor" />
                                  <path d="M30 11V2h-9v2h7v7h2z" fill="currentColor" />
                                  <path d="M21 30h9v-9h-2v7h-7v2z" fill="currentColor" />
                                  <path d="M25.49 10.13l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 6 11v10a1 1 0 0 0 .51.87l9 5a1 1 0 0 0 1 0l9-5A1 1 0 0 0 26 21V11a1 1 0 0 0-.51-.87zM16 7.14L22.94 11L16 14.86L9.06 11zM8 12.7l7 3.89v7.71l-7-3.89zm9 11.6v-7.71l7-3.89v7.71z" fill="currentColor" />
                                </svg>
                                <div>
                                  <p className="font-sembold text-xl text-gray-100">Des créations</p>
                                  <p className="font-sembold text-xl text-gray-100">sur mésure</p>
                                </div>
                              </div>
                              <div className="flex justify-end gap-3 text-gray-200">
                                <svg width="22" height="22" viewBox="0 0 512 512">
                                  <path d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z" fill="currentColor" />
                                  <path d="M207 353.8V157.4l145 98.2-145 98.2z" fill="currentColor" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 15 15"><path fill="currentColor" d="m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z" /></svg>
                                <svg width="20" height="20" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5" /></svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                          <img className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="/images/hero/image-2.jpg" alt="" />
                          <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                            <div className="absolute inset-x-5 bottom-6">
                              <div className="flex gap-3 text-white">
                                <svg width="48" height="48" viewBox="0 0 32 32">
                                  <path d="M11 2H2v9h2V4h7V2z" fill="currentColor" />
                                  <path d="M2 21v9h9v-2H4v-7H2z" fill="currentColor" />
                                  <path d="M30 11V2h-9v2h7v7h2z" fill="currentColor" />
                                  <path d="M21 30h9v-9h-2v7h-7v2z" fill="currentColor" />
                                  <path d="M25.49 10.13l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 6 11v10a1 1 0 0 0 .51.87l9 5a1 1 0 0 0 1 0l9-5A1 1 0 0 0 26 21V11a1 1 0 0 0-.51-.87zM16 7.14L22.94 11L16 14.86L9.06 11zM8 12.7l7 3.89v7.71l-7-3.89zm9 11.6v-7.71l7-3.89v7.71z" fill="currentColor" />
                                </svg>
                                <div>
                                  <p className="font-sembold text-xl text-gray-100">Des créations</p>
                                  <p className="font-sembold text-xl text-gray-100">sur mésure</p>
                                </div>
                              </div>
                              <div className="flex justify-end gap-3 text-gray-200">
                                <svg width="22" height="22" viewBox="0 0 512 512">
                                  <path d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z" fill="currentColor" />
                                  <path d="M207 353.8V157.4l145 98.2-145 98.2z" fill="currentColor" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 15 15"><path fill="currentColor" d="m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z" /></svg>
                                <svg width="20" height="20" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5" /></svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    <div
                      className="absolute -top-6 -right-6 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"
                    ></div>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
      </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
         
        </div>
      </section>
    </>
  );
};

export default Hero;
