export default function ContactInfo({ icon,title,info }) {
    return (
        <div className="contact-info">
            {icon}
            <span className='contact-info-title'>{title}</span>
            <span className='contact-info-text'>{info}</span>
        </div>
    )
};
