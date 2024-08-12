import './Experience.sass';
import { useState } from 'react';

import { MdWork } from "react-icons/md";


export default function Experience() {

    const experiences = [
        {
            'title' : 'Full Stack Developer',
            'company' : 'Uzumi',
            'date' : '2024 - Present',
            'description' : 'Joined the digital development sector through a young Brussels-based startup, specializing in tailor-made website creation.'
        },
        {
            'title' : 'Web Developer',
            'company' : 'MolenGeek',
            'date' : '2023 - 2024',
            'description' : 'Undertook professional web development training with 6 months focused on front-end development, 3 months on backend, and a major final project uniting both skills.'
        },
        {
            'title' : 'Day and Night Receptionnist',
            'company' : 'MEININGER',
            'date' : '2021 - 2023',
            'description' : 'As a day and night receptionist, I developed strong problem-solving abilities, efficiently managing multiple tasks and guest requests simultaneously, while ensuring smooth operations across all shifts.'
        }
    ]

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                <h3>Work Experience</h3>
                <h1>My Background</h1>
                <p>An unconventional career path marked by a professional transition driven by the decision to pursue a passion.</p>
                <div className='experience-content' data-aos="fade-right">
                    {experiences.map((experience, index) => (
                        <div key={index} className="experience-div" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                            <div className="experience-icon" style={{ animation : hoveredIndex === index  ? "rotateIcon 0.5s linear forwards" : "none", backgroundColor : hoveredIndex === index ? "#81ecec" : "transparent"}}>
                                <MdWork style={{color : hoveredIndex === index ? "#6b665b" : "#81ecec"}}/>
                            </div>
                            <div className="experience-text">
                                <h3>{experience.title}</h3>
                                <h4><b>{experience.company}</b> | {experience.date}</h4>
                                <p>{experience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="experience-bg"></div>
        </section>
    )
}