import './About.sass';

import URLRobin from '../../assets/robin-about.png';
import CV from '../../assets/CVWebDev.png';
import { FaDownload } from "react-icons/fa6";



export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-left">
                <span>LEFÈVRE</span>
                <div className='about-img-container' data-aos="fade-right">
                    <img src={URLRobin} alt="Robin Lefèvre" />
                    <div className='about-circle'>
                    </div>
                    <a href={CV} download><FaDownload  /></a>
                </div>
            </div>
            <div className="about-right">
                <h3>ABOUT ME</h3>
                <h1>Coding with passion, shaping the digital world.</h1>
                <p>My passion for coding extends far beyond a simple career choice, it's an intrinsic part of who I am. I am continually driven to explore the latest technologies, tackle complex challenges, and develop digital solutions that not only meet but exceed expectations. <br/><br/>I thrive on the satisfaction of solving intricate problems and creating websites and apps that have a tangible impact on the lives of users.</p>
                <div className="about-infos">
                    <div className="about-text">
                        <div>
                            <span className='info'>Name</span><span className='text'>Robin Lefèvre</span>
                        </div>
                        <div>
                            <span className='info'>Age</span><span className='text'>26 Years Old</span>
                        </div>
                    </div>
                    <div className="about-text">
                        <div>
                            <span className='info'>Phone</span><span className='text'>+324 92 95 62 00</span>
                        </div>
                        <div>
                            <span className='info'>Email</span><span className='text'>robinlefevre85@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}