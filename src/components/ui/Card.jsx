export default function Card({icon, title, description}) {
    return (
        <div className="soft">
            <div className='soft-content-container'>
                <div className="soft-content">
                    {icon}
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
};
