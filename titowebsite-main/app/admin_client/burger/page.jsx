import React, { useState } from 'react';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
                <li>Accueil</li>
                <li>À propos</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default BurgerMenu;