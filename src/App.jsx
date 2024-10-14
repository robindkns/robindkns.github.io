import './App.sass';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Softskills from './components/Softskills/Softskills.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Works from './components/Works/Works.jsx';
import Experience from './components/Experience/Experience.jsx';
import Formation from './components/Formation/Formation.jsx';
import Contact from './components/Contact/Contact.jsx';
import Loading from './components/Loading/Loading.jsx';

function App() {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée des animations en ms
          once: true,     // Animation se déclenche une seule fois (ne se répète pas lors du scroll)
        });
    }, []);

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }

    return (
        <div className='App'>
            <Navbar />
            <Home />
            <Softskills />
            <About />
            <Skills />
            <Works/>
            <Experience />
            <Formation />
            <Contact />
        </div>
    );
}

export default App;

