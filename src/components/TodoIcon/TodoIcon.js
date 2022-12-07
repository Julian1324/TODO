import React from 'react';
import './TodoIcon.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IconContext } from "react-icons";

const iconTypes = {
    "check": color => (
        <AiOutlineCheckCircle className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <AiFillCloseCircle className="Icon-svg Icon-svg--delete" fill={color} />
    )
};

function TodoIcon({ type, color, onClick }) {
    return (
        <IconContext.Provider value={{ size: '30px' }}>
            <span className={`Icon-container Icon-container--${type}`} onClick={onClick}> {iconTypes[type](color)} </span>
        </IconContext.Provider>
    );
}
export { TodoIcon };