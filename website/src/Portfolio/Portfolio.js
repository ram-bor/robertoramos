import React, { Component } from 'react'
import './Portfolio.css'
import OrderPorter from './Images/mern-project.png'
import swb from './Images/swb-app.png'
import GoDish from './Images/godish.png'
import Nav from 'react-bootstrap/Nav'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


var orderPorterLink = "https://github.com/ram-bor/group-mern-project"
var goDishLink = 'https://github.com/GoDishApp'
var swbLink = 'https://github.com/ram-bor/swb-app'


export default class Portfolio extends Component {
    render() {
        return (
            <div id="Portfolio">
                <h1>Projects</h1>
                <div className="project-parent-container">
                    <div className="project-div">
                        <h2>Order Porter</h2>
                        <div className="image-div">
                            <img src={OrderPorter} alt="order porter image" style={{ width: '400px' }}></img>
                            <div className="overlay">
                                <Nav.Link href={orderPorterLink}>
                                    <FontAwesomeIcon icon={faCodeBranch} />
                                </Nav.Link>
                            </div>
                        </div>
                    </div>
                    <div className="project-div">
                        <h2>Statistics without Borders</h2>
                        <img src={swb} alt="statistics without border image" style={{ width: '400px' }}></img>
                        <div className="overlay">
                            <Nav.Link href={swbLink}>
                                <FontAwesomeIcon icon={faCodeBranch} />
                            </Nav.Link>
                        </div>
                    </div>
                    <div className="project-div">
                        <h2>GoDish</h2>
                        <img src={GoDish} alt="goDish image" style={{ width: '400px' }}></img>
                        <div className="overlay">
                            <Nav.Link href={goDishLink}>
                                <FontAwesomeIcon icon={faCodeBranch} />
                            </Nav.Link>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
