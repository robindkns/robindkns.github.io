import { useState } from 'react'

import './Works.sass'

import { FaPlay } from "react-icons/fa";

import IMGUzumi from '../../assets/uzumi.png'
import IMGRoyella from '../../assets/royella.png'
import IMGGameHaven from '../../assets/gamehaven.png'
import IMGMolengeek from '../../assets/molengeek.png'
// import VideoUzumi from '../../assets/uzumi.mp4'

export default function Works() {

    const projects = [
        {
            "language": ["NextJS", "Sass"],
            "name": "Uzumi - Official Website for Uzumi",
            "image" : IMGUzumi,
            "video" : null
        },
        {
            "language": ["NextJS", "Django", "TailwindCSS"],
            "name": "Royella - Final Project of Fullstack Developer Training",
            "image" : IMGRoyella,
            "video" : null
        },
        {
            "language" : ["NextJS", "Redux", "Sass"],
            "name": "GameHaven - Final Project of Frontend Developer Training",
            "image" : IMGGameHaven,
            "video" : null
        },
        {
            "language": ["HTML", "Sass","JavaScript"],
            "name": "MolenGeek - Final DOM Project",
            "image" : IMGMolengeek,
            "video" : null
        }
    ]

    const [visibleProjects, setVisibleProjects] = useState(3);
    const [height, setHeight] = useState("100vh");
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleShow = () => {
        if (visibleProjects === projects.length) {
            setVisibleProjects(3);
            setHeight("100vh");
        } else {
            setVisibleProjects(projects.length);
            setHeight("auto");
        }
    };

    return (
        <section className="works" id="works" style={{ height: height }}>
            <div className="works-header">
                <h3>Portfolio</h3>
                <h1>My Latest Projects</h1>
            </div>
            <div className="works-body">
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <>
                        <div className="project-container" key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                            <div className="project-language">
                                {project.language.map((language, index) => (
                                    <span key={index}>{language}</span>
                                ))}
                            </div>
                            <div className="project-name">
                                <h3>{project.name}</h3>
                            </div>
                            <div className="project-image">
                                {hoveredIndex === index ? 
                                    <img src={project.image} alt={project.name} style={{animation : "showRotate 0.5s ease-in-out forwards"}} />
                                : <img src={project.image} alt={project.name} style={{animation : "unshowRotate 0.5s ease-in-out forwards"}} />}
                            </div>
                            <div className="project-modal">
                                <FaPlay />
                            </div>
                        </div>
                    </>
                ))}
                <div className="works-footer">
                    {height === "100vh" ? <button onClick={handleShow}>More</button> : <button onClick={handleShow}>Less</button>}
                </div>
            </div>
        </section>
    );
}