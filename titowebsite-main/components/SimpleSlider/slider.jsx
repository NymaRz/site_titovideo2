"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Nombre de diapositives à afficher à la fois
        slidesToScroll: 1, // Nombre de diapositives à faire défiler à la fois
        responsive: [
            {
                breakpoint: 768, // Réduire le nombre de diapositives affichées à l'écran lorsque la largeur de l'écran est inférieure à 768px
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // Réduire encore plus le nombre de diapositives affichées à l'écran lorsque la largeur de l'écran est inférieure à 480px
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="slide">
            <h2>Vos gains</h2>
            <Slider {...settings}>
                <div className="slider">
                    <h1>Gagner du temps</h1>
                    <img src={"/images/testimonials/montagerythme2.svg"}/>
                    <h3>Slide 1</h3>
                </div>
                <div className="slider">
                    <h3>Slide 2</h3>
                </div>
                <div className="slider">
                    <h3>Slide 3</h3>
                </div>

            </Slider>
        </div>

    );
};

export default SimpleSlider;
