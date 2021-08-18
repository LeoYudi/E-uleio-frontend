import React from 'react'
import './style.css'

function Button({ content, ...rest }) {

    return (
        <button {...rest} className='button'>{content}</button>
    )
}

export default Button;