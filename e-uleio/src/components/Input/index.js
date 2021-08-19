import React from 'react';

import './style.css';

function Input({ label, id, ...rest }) {
    return (
        <div className="input-container">
            <label>{label}</label>
            <input id={id}  {...rest} />
        </div>
    );
}

export default Input;