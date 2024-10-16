import './Contact.sass';

import emailjs from '@emailjs/browser';
import { useState } from 'react';

import { Envelope, PhoneCall, NavigationArrow, Atom, LinkedinLogo, BehanceLogo } from 'phosphor-react';
import { PiGithubLogoDuotone } from 'react-icons/pi';
import ContactInfo from '../ui/ContactInfo';

export default function Contact() {

    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email === '' || formData.subject === '' || formData.message === '') {
            alert('Please, fill in all the fields');
            return;
        } else {
            emailjs.send(
                'service_5vxoars',
                'template_af1cooa',
                formData,
                'm18543kRJjnlR_RsO'
            ).then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setFormData({ email: '', subject: '', message: '' });
                alert('Email envoyé avec succès !');
            }).catch((err) => {
                console.error('Échec lors de l\'envoi de l\'email:', err);
                alert('Erreur lors de l\'envoi de l\'email. Veuillez réessayer.');
            });
        }
    };


    return (
        <section className="contact" id="contact">
            <div className="contact-header">
                <h3>CONTACT</h3>
                <h1>Let's Get In Touch</h1>
            </div>
            <div className="contact-body">
                <div className='contact-infos'>
                    <ContactInfo 
                        icon={<PhoneCall color="#81ecec" weight="duotone" />}
                        title="Call Me" 
                        info="+324 92 95 62 00"
                    />
                    <ContactInfo 
                        icon={<Envelope color="#81ecec" weight="duotone" />}
                        title="Email" 
                        info="robinlefevre85@gmail.com"
                    />
                    <ContactInfo 
                        icon={<NavigationArrow color="#81ecec" weight="duotone" />}
                        title="Location" 
                        info="Liège, Belgium"
                    />
                </div>
                <div className="contact-form-container">
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80996.3827940479!2d5.516877821584352!3d50.62457244329398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f74b8eacfcfb%3A0x40099ab2f4d6b40!2zTGnDqGdl!5e0!3m2!1sfr!2sbe!4v1723476345972!5m2!1sfr!2sbe" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="form-container">
                        <form>
                            <div className='input-container'>
                                <input type="text" placeholder='Your Email' onChange={handleChange} name='email' value={formData.email} required />
                                <input type="text" placeholder='Your Subject' onChange={handleChange} name='subject' value={formData.subject} required />
                            </div>
                            <textarea placeholder='Your Message' onChange={handleChange} value={formData.message} required name='message'/>
                            <button type='submit' onClick={handleSubmit}>SEND</button>
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
                        <a href="https://www.behance.net/robinlefvre" rel="noreferrer" target='_blank'><BehanceLogo weight="duotone" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}