import React from 'react'
// import '../App.css'
import { Button } from '../Button/button';
import './Hero-section.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="./irinAjo.mp4" autoPlay loop muted/>
            <h1>Adevnture Awaits</h1>
            <p>What Are you Waiting for ?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'buttonSize='bnt--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary'buttonSize='bnt--large'>WATCH TRAILER<i className="far fa-play-circle" aria-hidden="true"></i></Button>
            </div>
            
        </div>
    )
}

export default HeroSection
