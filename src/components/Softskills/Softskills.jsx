/* eslint-disable no-unused-vars */
import './Softskills.sass';

import { GiBurningPassion } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaGear } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Card from '../ui/Card';
import { useState } from 'react';

export default function Softskills() {

    const [softskills, setSoftskills] = useState([
        {
            id: 1,
            icon: <GiBurningPassion />,
            title: 'Passionate',
            description: 'Enthusiastically committed to delivering high-quality code and user experiences, motivated by a genuine love for technology.'
        },
        {
            id: 2,
            icon: <LiaChalkboardTeacherSolid />,
            title: 'Problem Solving',
            description: 'Demonstrated ability to identify issues quickly and develop innovative solutions that meet both technical and business needs.'
        },
        {
            id: 3,
            icon: <FaGear />,
            title: 'Self-Learning',
            description: 'Constantly seeking to improve skills and knowledge through continuous learning and staying up-to-date with industry trends.'
        },
        {
            id: 4,
            icon: <FaUser />,
            title: 'Fast Learner',
            description: 'Committed to staying up-to-date with industry trends and continuously learning new technologies and skills.'
        }
    ]);

    return (
        <section className="softskills" id="softskills">
            <div className='soft-container'>
                {softskills.map((softskill,index) => (
                    <Card key={index} icon={softskill.icon} title={softskill.title} description={softskill.description} />
                ))}
            </div>
        </section>
    );
}