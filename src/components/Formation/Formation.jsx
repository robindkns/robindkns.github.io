import { useState } from 'react'

import './Formation.sass';

import { IoSchool } from "react-icons/io5";

export default function Formation() {

    const formations = [
        {
            'title' : 'Training Web Developer Full Stack',
            'company' : 'MolenGeek',
            'date' : '2023 - 2024',
            'description' : 'Completed full stack web development training, refreshing my coding skills and mastering current programming languages. The program covered six months of front-end, three months of backend, and a final project integrating both areas.'
        },
        {
            'title' : 'Bachelor in Tourism Management',
            'company' : 'Haute Ecole Charlemagne',
            'date' : '2016 - 2020',
            'description' : "Obtained a Bachelor's degree with a broad and varied curriculum, covering subjects from management to finance and social sciences, providing a well-rounded general education."
        },
        {
            'title' : 'CESS in I.T.',
            'company' : 'IPES Wavre',
            'date' : '2013 - 2016',
            'description' : 'Secondary education with a focus on IT which provided a strong theoretical foundation in computing and programming. This early exposure to IT concepts laid the groundwork for advanced studies and a career in digital development.'
        }
    ]

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="formation" id="formation">
            <div className="formation-bg"></div>
            <div className="formation-container">
                <h3>Education</h3>
                <h1>My Studies</h1>
                <p>An educational journey that began with a solid foundation in I.T. during secondary school, providing the theoretical groundwork for a successful transition into digital development.</p>
                <div className='formation-content' data-aos="fade-left">
                    {formations.map((formation, index) => (
                        <div key={index} className="formation-div" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                            <div className="formation-icon" style={{ animation : hoveredIndex === index  ? "rotateIcon 0.5s linear forwards" : "none", backgroundColor : hoveredIndex === index ? "#81ecec" : "transparent"}}>
                                <IoSchool style={{color : hoveredIndex === index ? "#6b665b" : "#81ecec"}}/>
                            </div>
                            <div className="formation-text">
                                <h3>{formation.title}</h3>
                                <h4><b>{formation.company}</b> | {formation.date}</h4>
                                <p>{formation.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}