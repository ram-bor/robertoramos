import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="Header-Parent">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="./home.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="./portfolio.html" class="nav-link">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a href="./about.html" class="nav-link">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a href="./contact.html" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        )
    }

}