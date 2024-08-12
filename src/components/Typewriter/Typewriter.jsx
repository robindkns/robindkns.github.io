import React, { useState, useEffect, useMemo } from "react";
import "./Typewriter.sass"; // Crée ce fichier pour y mettre les styles CSS

const Typewriter = () => {
    const texts = useMemo(() => ["Full Stack Developer", "Front End Developer", "Back End Developer"], []);
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [speed, setSpeed] = useState(100); // Vitesse de l'animation

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[index];

            if (!isDeleting && currentText.length < fullText.length) {
                setCurrentText(fullText.substring(0, currentText.length + 1));
            } else if (isDeleting && currentText.length > 0) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
            } else if (!isDeleting && currentText.length === fullText.length) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause avant l'effacement
            } else if (isDeleting && currentText.length === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(typingTimeout);
    }, [currentText, isDeleting, index, texts, speed]);

    return (
        <div className="typewriter">
            <span id="text">{currentText}</span>
            <span className="console-cursor">█</span>
        </div>
    );
};

export default Typewriter;
