/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import './Works.sass'
import Modal from '../Modal/Modal';
import Project from '../ui/Project';

import IMGUzumi from '../../assets/uzumi.png'
import IMGRoyella from '../../assets/royella.png'
import IMGGameHaven from '../../assets/gamehaven.png'
import IMGMolengeek from '../../assets/molengeek.png'
import IMGPortfolio from '../../assets/portfolio_back.png'
import IMGPokeLegends from '../../assets/pokelegends.png'
import IMGMulti from '../../assets/multistep.png'
import IMGManga from '../../assets/manga.png'
import IMGta from '../../assets/cardgame.png'
import VideoUzumi from '../../assets/uzumi.mp4'
import VideoMolengeek from '../../assets/molengeek.mp4'
import VideoPortfolio from '../../assets/portfolio_back.mp4'
import VideoGameHaven from '../../assets/gamehaven.mp4'
import VideoRoyella from '../../assets/royella.mp4'
import VideoPokeLegends from '../../assets/pokelegends.mp4'
import VideoManga from '../../assets/manga.mp4'
import VideoMulti from '../../assets/multistepform.mp4'
import VideoGTA from '../../assets/cardgame.mp4'

export default function Works() {

    const [projects, setProjects] = useState([
        {
            "language": ["NextJS", "Sass"],
            "name": "Uzumi - Official Website for Uzumi",
            "image": IMGUzumi,
            "video": VideoUzumi
        },
        {
            "language": ["NextJS", "Django", "TailwindCSS","Redux"],
            "name": "Royella - Final Project of Fullstack Developer Training",
            "image": IMGRoyella,
            "video": VideoRoyella
        },
        {
            "language": ["NextJS", "Redux", "Sass","API"],
            "name": "GameHaven - Final Project of Frontend Developer Training",
            "image": IMGGameHaven,
            "video": VideoGameHaven
        },
        {
            "language": ["Python","Django","MySQL","Bootstrap"],
            "name": "Portfolio - Final Project of Backend Developer Training",
            "image": IMGPortfolio,
            "video": VideoPortfolio
        },
        {
            "language": ["Javascript", "HTML", "Sass"],
            "name": "PokeLegends - Short Game in Javascript",
            "image": IMGPokeLegends,
            "video": VideoPokeLegends
        },
        {
            "language": ["ReactJS", "API","Redux", "Sass"],
            "name": "Top Anime - API Project",
            "image": IMGManga,
            "video": VideoManga
        },
        {
            "language": ["ReactJS","Sass"],
            "name": "MultiStepForm - UseState Project",
            "image": IMGMulti,
            "video": VideoMulti
        },
        {
            "language": ["HTML", "JavaScript", "Sass"],
            "name": "GTA Card Game - DOM Javascript Project",
            "image": IMGta,
            "video": VideoGTA
        },
        {
            "language": ["HTML", "Sass", "JavaScript"],
            "name": "MolenGeek - Final DOM Project",
            "image": IMGMolengeek,
            "video": VideoMolengeek
        }
    ])

    const [visibleProjects, setVisibleProjects] = useState(3);
    const [height, setHeight] = useState("100vh");
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [hoveredVideo, setHoveredVideo] = useState(null);

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false)
        console.log("closeModal");
        console.log(showModal);

    }

    useEffect(() => {
        console.log("showModal: ", showModal);
    }, [showModal]);

    useEffect(() => {
        console.log("hoveredIndex: ", hoveredIndex);
        if (hoveredIndex !== null) {
            setHoveredVideo(projects[hoveredIndex].video);
        }
    }, [hoveredIndex, projects]);

    useEffect(() => {
        console.log("hoveredVideo: ", hoveredVideo);
    }, [hoveredVideo]);

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
                <h3>WORKS</h3>
                <h1>My Latest Projects</h1>
            </div>
            <div className="works-body">
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <Project 
                        key={index} 
                        onMouseEnter={() => setHoveredIndex(index)} 
                        onMouseLeave={() => setHoveredIndex(null)} 
                        project={project} 
                        index={index} 
                        hoveredIndex={hoveredIndex} 
                        openModal={openModal} 
                    />
                ))}
                {showModal ? <Modal setShowModal={setShowModal} showModal={showModal} closeModal={closeModal} video={hoveredVideo} /> : null}
                <div className="works-footer">
                    {height === "100vh" ? <button onClick={handleShow}>More</button> : <button onClick={handleShow}>Less</button>}
                </div>
            </div>
        </section>
    );
}