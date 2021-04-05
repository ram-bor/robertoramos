import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-list">
                        <Nav.Link href="#Home" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="#About" className="nav-link">About Me</Nav.Link>
                        <Nav.Link href="#Portfolio" className="nav-link">Portfolio</Nav.Link>
                        <Nav.Link href="#Contact" className="nav-link">Contact</Nav.Link>
                        <Nav.Link href="#Resume" className="nav-link">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}