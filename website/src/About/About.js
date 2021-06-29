import React, { Component } from 'react'
import './About.css'
import Headshot from './Images/Headshot.jpg'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <h1>About Me</h1>
                <div className="about-parent">
                    <div className="image-div">
                        <img src={Headshot} style={{ width: '250px' }} alt="headshot" className="image" />
                    </div>
                    <div className="statement-div">
                        <p>
                            As a Software Developer, I establish clear understanding of problems while acting proactively. I pride myself on being a continuous learner meaning always striving for optimal solutions and bridging relationships.
                            In my freetime, I enjoy biking, hiking, collecting vinyl, and recently (due to Covid-19),
                            attempting to cook new and delicious recipes at home.
                            I live by the <i>code</i> that improvement supersedes failure.
                    </p>
                    </div>
                </div>
            </div >
        )
    }
}
