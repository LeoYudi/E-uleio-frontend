import React from 'react';

import './style.css';

function Input({ label, id, placeholder, ...rest }) {
    return (
        <div className="input-container">
            <input id={id} placeholder={placeholder} {...rest} />
        </div>
    );
}

export default Input;