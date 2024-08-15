/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiGithubLogoDuotone } from 'react-icons/pi';
import { LinkedinLogo, BehanceLogo } from 'phosphor-react';

import './BurgerMenu.sass';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // fermé par défaut

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (e) => {
        if (isOpen && !e.target.closest('.burger-menu')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="burger-menu">
            <button className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <RxHamburgerMenu />
            </button>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <IoMdCloseCircleOutline onClick={() => setIsOpen(false)} />
                <ul>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#works" onClick={() => setIsOpen(false)}>Works</a></li>
                    <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
                <div className="socials-burger">
                    <span>My Links</span>
                    <div>
                        <a href="https://linkedin.com/in/robin-lefèvre" rel="noreferrer" target='_blank'><LinkedinLogo weight="duotone" /></a>
                        <a href="https://github.com/robindkns" rel="noreferrer" target='_blank'><PiGithubLogoDuotone /></a>
                        <a href="www.linkedin.com/in/robin-lefèvre" target='_blank'><BehanceLogo weight="duotone" /></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default BurgerMenu;
