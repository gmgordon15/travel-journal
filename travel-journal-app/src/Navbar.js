import React from 'react'
import image from './journallogo.png'

function Navbar() {
    return (
        <div className="Nav-Container">
            <div className="Title-Container">
                <img src={image}/>
                <div className="Big-Title">my travel journal</div>
            </div>
        </div>
    )
}

export default Navbar
