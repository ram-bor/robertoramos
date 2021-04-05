import React, { Component } from 'react'
import './Portfolio.css'
// import Nav from 'react-bootstrap/Nav'

import OrderPorter from './Images/mern-project.png'
// import NavLink from 'react-bootstrap/esm/NavLink'

export default class Portfolio extends Component {
    render() {
        return (
            <div id="Portfolio">
                <h1>Projects</h1>
                <div className="project-parent-container">
                    <div className="project-div">
                        <img href={OrderPorter} alt="order porter project" style={{ width: '200px' }}></img>Order Porter
                    </div>
                    <div className="project-div"></div>
                    <div className="project-div"></div>
                </div>
            </div>
        )
    }
}
