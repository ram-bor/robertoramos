import React, { Component } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div className="About-Parent">
                <h1>About Me</h1>
                <LoremIpsum />
            </div>
        )
    }
}
