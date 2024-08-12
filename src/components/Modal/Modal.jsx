// Modal.js
import './Modal.sass';
import { useEffect } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Modal(props) {
    useEffect(() => {
        document.body.classList.toggle('no-scroll', props.showModal);
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [props.showModal]);

    if (!props.showModal) return null;

    return (
        <>
            {props.video ? 
            <div className="modal" onClick={props.closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button onClick={props.closeModal}><IoMdCloseCircleOutline /></button>
                    <video muted autoPlay controls>
                        <source src={props.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div> 
            : null}
        </>
    );
}
