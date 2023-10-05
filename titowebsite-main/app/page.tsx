"use client"
import Blog from '@/components/Blog'
import Brands from '@/components/Brands'
import ScrollUp from '@/components/Common/ScrollUp'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import UserInfo from '@/components/UserInfo'
import Team from '@/components/Team'
import Image from 'next/image'
import AutoPlayMethods from '@/components/slider'
import AboutComponent from '@/components/About'
import About from '@/components/About'


export default function Home() {
  return (
    <>
     <ScrollUp />
      <Hero />
      <Features />
      <Team/>
      <Portfolio />
      <Testimonials />
      <Brands />
      <Blog />
      <Contact />
   </>
  )
}
