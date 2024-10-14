import './OtherSkills.sass';

import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaPhp } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";

export default function OtherSkills() {
    return (
        <div className="other-skills">
            <div className="other-col">
                <h3>STRONG FUNDAMENTALS</h3>
                <ul>
                    <li className='languages-ip'>
                        <BiLogoCPlusPlus />
                        <span>C / C++</span>
                    </li>
                    <li className='languages-ip'>
                        <FaPhp />
                        <span>PHP</span>
                    </li>
                </ul>
            </div>
            <div className="other-col">
                <h3>CURRENTLY LEARNING</h3>
                <ul>
                    <li className='languages-ip'>
                        <FaAngular />
                        <span>Angular</span>
                    </li>
                    <li className='languages-ip'>
                        <TbBrandReactNative />
                        <span>React Native</span>
                    </li>
                    <li className='languages-ip'>
                        <FaVuejs />
                        <span>Vue.js</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}