import React, { Component } from 'react'
import './Portfolio.css'

export default class Portfolio extends Component {
    render() {
        return (
            <div id="Portfolio">
                <h1>Projects</h1>
                <div className="project-parent-container">
                    <div className="project-div"></div>
                    <div className="project-div"></div>
                    <div className="project-div"></div>
                </div>
            </div>
        )
    }
}
