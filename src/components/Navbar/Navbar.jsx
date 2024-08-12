import './Navbar.sass';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
                    <Link to='#home'>Home</Link>
                </li>
                <li>
                    <Link to='#about'>About</Link>
                </li>
                <li>
                    <Link to='#skills'>Skills</Link>
                </li>
                <li>
                    <Link to='#works'>Works</Link>
                </li>
                <li>
                    <Link to='#experience'>Experience</Link>
                </li>
                <li>
                    <Link to='#contact'>Contact</Link>
                </li>
            </ul>
            <button>DOWNLOAD CV</button>
        </nav>
    );
}