import React, { Component } from 'react'
import './About.css'
import Headshot from './Images/Headshot.jpg'

export default class About extends Component {
    render() {
        return (
            <div id="About">
                <h1>About Me</h1>
                <div>
                    <img src={Headshot} style={{ width: '200px' }} />
                </div>
                <div>

                    <p className="about-statement"> I am an intuitive and design-driven software developer with years of experience in a wide array of industries.
                    I learn, I write, I design, I code.
                    My passion for technology and social change allows me to listen with compassion and act with conviction.
                    In my freetime, I enjoy biking, hiking, collecting vinyl, and recently (due to Covid-19), attempting to cook new and delicious recipes at home.
                        I live by the <i>code</i> that in order to improve you have to fail often.
                    </p>
                </div>
            </div >
        )
    }
}
