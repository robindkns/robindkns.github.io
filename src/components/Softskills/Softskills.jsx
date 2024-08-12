import './Softskills.sass';

import { GiBurningPassion } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaGear } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function Softskills() {
    return (
        <section className="softskills" id="softskills">
            <div className='soft-container'>
                <div className="soft">
                    <div className='soft-content-container'>
                        <div className="soft-content">
                            <GiBurningPassion />
                            <h3>Passionate</h3>
                            <p>Enthusiastically committed to delivering high-quality code and user experiences, motivated by a genuine love for technology.</p>
                        </div>
                    </div>
                </div>
                <div className="softbis">
                    <div className='soft-content-container'>
                        <div className="soft-content">
                            <LiaChalkboardTeacherSolid />
                            <h3>Problem Solving</h3>
                            <p>Demonstrated ability to identify issues quickly and develop innovative solutions that meet both technical and business needs.</p>
                        </div>
                    </div>
                </div>
                <div className="soft">
                    <div className='soft-content-container'>
                        <div className="soft-content">
                            <FaGear />
                            <h3>Self-Learning</h3>
                            <p>Constantly seeking to improve skills and knowledge through continuous learning and staying up-to-date with industry trends.</p>
                        </div>
                    </div>
                </div>
                <div className="softbis">
                    <div className='soft-content-container'>
                        <div className="soft-content">
                            <FaUser />
                            <h3>Autonomous</h3>
                            <p>Able to manage and complete tasks independently while ensuring alignment with team goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}