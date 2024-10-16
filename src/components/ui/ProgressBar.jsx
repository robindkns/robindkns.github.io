export default function ProgressBar({ skill, isVisible, index, percentageRefs }) {
    return (
        <div className="skills-container">
            <div className="skills-content-container">
                <div className={`skill ${isVisible ? 'animate' : ''}`} style={{ width: isVisible ? skill.percentage : '0%' }}>
                    <span>{skill.name}</span>
                </div>
                <div className='skills-line'></div>
            </div>
            <span className={`percentage ${isVisible ? 'animate' : ''}`} ref={el => percentageRefs.current[index] = el}>
                {isVisible ? '' : '0%'}
            </span>
        </div>
    )
};
