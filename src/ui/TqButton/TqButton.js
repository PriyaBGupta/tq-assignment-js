import React from 'react';
import './TqButton.css';
const TqButton = (props) => {
    return (
    <button className="tq-primary-btn" {...props}>{props.children}</button>
    )
}
export default TqButton;