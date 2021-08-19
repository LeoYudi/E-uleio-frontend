import React from 'react'
import './style.css'

function Home(){
    return(
        <div className="home-container">
            <section className="logo">
                <img src="/assets/books-icon.png" alt="Logo"></img>
                <p>Onde as <strong>melhores histórias</strong> se encontram.</p>
            </section>
        </div>
    )
}

export default Home;
