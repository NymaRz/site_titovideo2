import React, { useState, useEffect } from 'react';
import SmartSlider from 'react-smart-slider';
import SectionTitle from './Common/SectionTitle';
// DummyCaption component for example
const DummyCaption = ({ caption }) => (
  <div
    style={{
      position: 'absolute',
      right: 100,
      top: 250,
      fontSize: 38,
      padding: 55,
    
    }}
  >
    {caption}
  </div>
);

const About = () => {
  const slidesArray = [
    {
      url: '/images/about/time.jpg',

      // (Optional) Set if you want to add any content on your slide
      childrenElem: <DummyCaption caption="Gagne du temps" />,
    },
    {
      url: '/images/about/protection.jpg',
      childrenElem: <DummyCaption caption="Protège ton image" />,
    },
    {
      url: '/images/about/thune.jpg',
      childrenElem: <DummyCaption caption="Service complet prix cassé" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = 3000; // Intervalle en millisecondes pour l'auto-slide (3 secondes)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesArray.length);
    }, autoSlideInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
    <div className="container">
      <SectionTitle
        title="Nos services"
        paragraph="Titovidéo c'est aussi des services de qualité pour vous accompagner dans vos projets."
        center
        mb="80px"
      />
    <div className="About">
      <SmartSlider
        slides={slidesArray}
        buttonShape="square"
        activeSlide={currentIndex} // Utilisez currentIndex pour afficher la diapositive active
      />
    </div>
    </div>
    </section>
  );
};

export default About;
