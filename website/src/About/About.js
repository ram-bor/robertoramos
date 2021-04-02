import React, { Component } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div id="About">
                <h1>About Me</h1>
                <p className="about-statement"> I am an intuitive and design-driven full stack developer with years of experience in a wide array of disciplines.</p>
                <p class="about-text">I learn, I write, I design, I code. </p>My passion for technology and social change allows me to listen with compassion and act with conviction. <br> In my freetime, I enjoy biking, hiking, collecting vinyl, and more recently (due to Covid-19), attempting to cook new and different cuisines at home. <br> I live by the <i>code</i> that in order to improve you have to fail often.</p>
            </div>
        )
    }
}
