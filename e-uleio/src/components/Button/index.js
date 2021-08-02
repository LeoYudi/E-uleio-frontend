import React from 'react'
import './style.css'

function Button({ title, ...rest }) {

    return (
        <button {...rest} className='button'>{title}</button>
    )
}

export default Button;