/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';
import './Skills.sass';
import OtherSkills from '../OtherSkills/OtherSkills';
import ProgressBar from '../ui/ProgressBar';

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const skillsRef = useRef(null);
    const percentageRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true); // Marquer l'animation comme effectuée
                }
            },
            { threshold: 0.9 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (isVisible) {
            percentageRefs.current.forEach((ref, index) => {
                const percentageValue = parseInt(skills[index].percentage);
                new CountUp(ref, percentageValue, {
                    duration: 3,
                    useEasing: true,
                    useGrouping: true,
                    suffix: '%'
                }).start();
            });
        }
    }, [isVisible]);

    const skills = [
        { 'name': 'HTML / CSS', 'percentage': '90%' },
        { 'name': 'JavaScript', 'percentage': '75%' },
        { 'name': 'ReactJS / NextJS', 'percentage': '80%' },
        { 'name': 'Python', 'percentage': '80%' },
        { 'name': 'Django', 'percentage': '70%' },
        { 'name': 'MySQL', 'percentage': '65%' },
    ];

    return (
        <section className="skills" id="skills" ref={skillsRef}>
            <div className='skills-header'>
                <h3>MY SKILLS</h3>
                <h1>Evolving Over Time</h1>
            </div>
            <div className="skills-body">
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <ProgressBar key={index} skill={skill} isVisible={isVisible} percentageRefs={percentageRefs} index={index} />
                    ))}
                </div>
                <OtherSkills/>
            </div>
        </section>
    );
}
