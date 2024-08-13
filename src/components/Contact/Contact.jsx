import './Contact.sass';

import { Envelope, PhoneCall, NavigationArrow, Atom, LinkedinLogo, BehanceLogo } from 'phosphor-react';
import { PiGithubLogoDuotone } from 'react-icons/pi';

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-header">
                <h3>CONTACT</h3>
                <h1>Let's Get In Touch</h1>
            </div>
            <div className="contact-body">
                <div className='contact-infos'>
                    <div className="contact-info">
                        <PhoneCall size={40} color="#81ecec" weight="duotone" />
                        <span className='contact-info-title'>Call Me</span>
                        <span className='contact-info-text'>+324 92 95 62 00</span>
                    </div>
                    <div className="contact-info">
                        <Envelope size={40} color="#81ecec" weight="duotone" />
                        <span className='contact-info-title'>Email</span>
                        <span className='contact-info-text'>robinlefevre85@gmail.com</span>
                    </div>
                    <div className="contact-info">
                        <NavigationArrow size={40} color="#81ecec" weight="duotone" />
                        <span className='contact-info-title'>Address</span>
                        <span className='contact-info-text'>Liège, Belgium</span>
                    </div>
                </div>
                <div className="contact-form-container">
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80996.3827940479!2d5.516877821584352!3d50.62457244329398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f74b8eacfcfb%3A0x40099ab2f4d6b40!2zTGnDqGdl!5e0!3m2!1sfr!2sbe!4v1723476345972!5m2!1sfr!2sbe" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="form-container">
                        <form>
                            <div className='input-container'>
                                <input type="text" placeholder='Your Email' />
                                <input type="text" placeholder='Your Subject' />
                            </div>
                            <textarea placeholder='Your Message' />
                            <button type='submit'>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="contact-footer">
                <p>Made with React <Atom color="#81ecec" weight="duotone" /></p>
                <div className='separator'></div>
                <div className='contact-status'>
                    <div className='circle-blinking'></div>
                    <span>Available for work</span>
                    <div className="socials">
                        <a href="https://linkedin.com/in/robin-lefèvre" rel="noreferrer" target='_blank'><LinkedinLogo weight="duotone" /></a>
                        <a href="https://github.com/robindkns" rel="noreferrer" target='_blank'><PiGithubLogoDuotone /></a>
                        <a href="www.linkedin.com/in/robin-lefèvre" target='_blank'><BehanceLogo weight="duotone" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}