import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div id="Header">
                <div className="nav-list">
                    <div className="nav-item">
                        <a href="Header" className="nav-link">Home</a>
                    </div>
                    <div className="nav-item">
                        <a href="#About" className="nav-link">About Me</a>
                    </div>
                    <div
                        className="nav-item">
                        <a href="#Portfolio" className="nav-link">Portfolio</a>
                    </div>
                    <div className="nav-item">
                        <a href="#Contact" className="nav-link">Contact</a>
                    </div>
                </div>
            </div>
        )
    }

}