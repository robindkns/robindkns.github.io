/* eslint-disable no-unused-vars */
import './OtherSkills.sass';

import { useEffect, useState } from 'react';

import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaPhp } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

export default function OtherSkills() {

    const [isHoveredFund, setIsHoveredFund] = useState(null);
    const [isHoveredCurrent, setIsHoveredCurrent] = useState(null);

    const [fundamentals, setFundamentals] = useState([
        {
            name: "C / C++",
            icon: <BiLogoCPlusPlus />
        },
        {
            name: "PHP",
            icon: <FaPhp />
        }
    ]);

    const [currently, setCurrently] = useState([
        {
            name: "React Native",
            icon: <TbBrandReactNative />
        },
        {
            name: "Typescript",
            icon: <BiLogoTypescript />
        },
        {
            name: "Angular",
            icon: <FaAngular />
        }
    ])

    return (
        <div className="other-skills">
            <div className="other-col">
                <h3>STRONG FUNDAMENTALS</h3>
                <ul>
                    {fundamentals.map((item,index) => (
                        <li key={index} className='languages-ip-fund' onMouseOver={() => setIsHoveredFund(index)} onMouseLeave={() => setIsHoveredFund(false)}>
                            <div className="fund-content">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="other-col">
                <h3>CURRENTLY LEARNING</h3>
                <ul>
                    {currently.map((item,index) => (
                        <li key={index} className='languages-ip' onMouseOver={() => setIsHoveredCurrent(index)} onMouseLeave={() => setIsHoveredCurrent(false)}>
                            <div className="current-content">
                                {item.icon}
                                {isHoveredCurrent === index ? <span>{item.name}</span> : null}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}