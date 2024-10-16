export default function Language({liClass, item, onMouseOver, onMouseLeave, contentClass}) {
    return (
        <li className={liClass} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <div className={contentClass}>
                {item.icon}
                <span>{item.name}</span>
            </div>
        </li>
    )
};
