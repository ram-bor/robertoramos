import React, { Component } from 'react'
import './Portfolio.css'
import OrderPorter from './Images/mern-project.png'
import swb from './Images/swb-app.png'
import GoDish from './Images/godish.png'
// import Nav from 'react-bootstrap/Nav'

export default class Portfolio extends Component {
    render() {
        return (
            <div id="Portfolio">
                <h1>Projects</h1>
                <div className="project-parent-container">
                    <div className="project-div">
                        <h2>Order Porter</h2>
                        <img src={OrderPorter} alt="order porter image" style={{ width: '400px' }}></img>
                    </div>
                    <div className="project-div">
                        <h2>Statistics without Borders</h2>
                        <img src={swb} alt="statistics without border image" style={{ width: '400px' }}></img>
                    </div>
                    <div className="project-div">
                        <h2>GoDish</h2>
                        <img src={GoDish} alt="goDish image" style={{ width: '400px' }}></img>
                    </div>
                </div>
            </div>
        )
    }
}
