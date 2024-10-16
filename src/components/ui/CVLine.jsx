import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";

export default function CVLine({index, onMouseEnter, onMouseLeave, divClass, iconClass, textClass, experience, hoveredIndex}) {
    return (
        <div className={divClass} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={iconClass} style={{ animation: hoveredIndex === index ? "rotateIcon 0.5s linear forwards" : "none", backgroundColor: hoveredIndex === index ? "#81ecec" : "transparent" }}>
                {iconClass === "experience-icon" ? 
                <MdWork style={{ color: hoveredIndex === index ? "#6b665b" : "#81ecec" }} />: 
                <IoSchool style={{color : hoveredIndex === index ? "#6b665b" : "#81ecec"}}/>}
            </div>
            <div className={textClass}>
                <h3>{experience.title}</h3>
                <h4><b>{experience.company}</b> | {experience.date}</h4>
                <p>{experience.description}</p>
            </div>
        </div>
    )

};
