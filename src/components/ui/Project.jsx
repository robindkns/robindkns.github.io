import { FaPlay } from "react-icons/fa";
import Loading from "../Loading/Loading";

export default function Project({onMouseEnter, onMouseLeave, project, index, hoveredIndex, openModal}) {
    return (
        <>
            {project ? 
                <div className="project-container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
                            <img src={project.image} alt={project.name} style={{ animation: "showRotate 0.5s ease-in-out forwards" }} />
                            : <img src={project.image} alt={project.name} style={{ animation: "unshowRotate 0.5s ease-in-out forwards" }} />}
                    </div>
                    <div className="project-modal">
                        <FaPlay onClick={openModal} />
                    </div>
                </div> : <Loading />
            } 
        </>
    )
};
