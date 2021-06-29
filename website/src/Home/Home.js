import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light" expand="lg" fixed="top" className="nav-parent">
                <Nav className="nav-list">
                    <Nav.Link href="#Home" className="nav-link">Home</Nav.Link>
                    <Nav.Link href="#About" className="nav-link">About Me</Nav.Link>
                    <Nav.Link href="#Portfolio" className="nav-link">Portfolio</Nav.Link>
                    <Nav.Link href="#Contact" className="nav-link">Contact</Nav.Link>
                    <Nav.Link href="https://drive.google.com/file/d/13CgiS6IF98KCbb1kMbHjL5R0zKOviimQ/view?ths=true" className="nav-link">Resume</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}