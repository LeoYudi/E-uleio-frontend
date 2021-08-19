import React from 'react'

import './style.css'

function Header(text) {
    return (
        <div className="header-container">
            <div className="header-item">
                <img src="/assets/books-icon.png" alt="Logo"></img>
                <h1>E-ULEIO</h1>
            </div>

            <div className="header-item">
                <p>Um mundo de imaginação</p>
            </div>
        </div>
    )
}


export default Header;