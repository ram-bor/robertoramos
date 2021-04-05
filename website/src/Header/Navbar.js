import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'

export default class Navbar extends Component {
    render() {
        return (

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-list">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

     // <div id="Header">
            //     <div className="nav-list">
            //         <div className="nav-item">
            //             <a href="Header" className="nav-link">Home</a>
            //         </div>
            //         <div className="nav-item">
            //             <a href="#About" className="nav-link">About Me</a>
            //         </div>
            //         <div
            //             className="nav-item">
            //             <a href="#Portfolio" className="nav-link">Portfolio</a>
            //         </div>
            //         <div className="nav-item">
            //             <a href="#Contact" className="nav-link">Contact</a>
            //         </div>
            //         <div className="nav-item">
            //             <a href="#Resume" className="nav-link">Resume</a>
            //         </div>
            //     </div>
            // </div>