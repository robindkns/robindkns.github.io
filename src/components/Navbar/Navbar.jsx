import './Navbar.sass';
import { useState, useEffect } from 'react';

import CV from '../../assets/CVWebDev.png';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Navbar() {

    const [navClass, setNavClass] = useState(null);

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
        return () => window.removeEventListener('scroll', changeNavbar);
    }, []);

    const changeNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 1 ? setNavClass("nav-scrolled") : setNavClass(null);
        }
    };

    return (
        <nav className={navClass}>
            <ul>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#skills'>Skills</a>
                </li>
                <li>
                    <a href='#works'>Works</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            <button><a href={CV} download>DOWNLOAD CV</a></button>
            <BurgerMenu />
        </nav>
    );
}