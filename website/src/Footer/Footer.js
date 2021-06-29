import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'


var bmcUrl = 'https://www.buymeacoffee.com/vevufove'
var linkedinUrl = 'https://www.linkedin.com/in/rob-ramos/'
var githubUrl = "https://github.com/ram-bor"
var email = "mailto:roberto_c_ramos&#64;yahoo.com"
var resume = 'https://docs.google.com/document/d/1ekheMuFwPe3dN593Yc3okQ5szLsSbxNG85f9WgI848s/edit'

export default class Footer extends Component {
    render() {
        return (
            <div id="Footer">
                <div className="footer-bar">
                    <a href={bmcUrl}>
                        <FontAwesomeIcon icon={faMugHot} style={{
                            height: '25px',
                            width: '25px'
                        }} />
                    </a>
                    <a href={linkedinUrl}>
                        <FontAwesomeIcon icon={faLinkedin} style={{
                            height: '25px',
                            width: '25px'
                        }} />
                    </a>
                    <a href={githubUrl} >
                        <FontAwesomeIcon icon={faGithub} style={{
                            height: '25px',
                            width: '25px'
                        }} />
                    </a>
                    {/* <a href={email}>
                        <FontAwesomeIcon icon={faEnvelope} style={{
                            height: '25px',
                            width: '25px'
                        }} />
                    </a> */}
                    {/* <a href={resume}>
                        <FontAwesomeIcon icon={faFile} style={{
                            height: '25px',
                            width: '25px'
                        }} />
                    </a> */}
                </div>
                <p className="copyright">Copyright &copy; 2021. Revitalized and coded by Roberto Ramos.</p>
            </div >
        )
    }
}
