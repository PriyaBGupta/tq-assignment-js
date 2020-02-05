import React from 'react';
import './TqInput.css';

const TqInput = props => {
    return(
        <input type="text" {...props} className="tq-input"/>
    )
}
export default TqInput;