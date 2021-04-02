import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


var bmcUrl = 'https://www.buymeacoffee.com/vevufove'
var linkedinUrl = 'https://www.linkedin.com/in/rob-ramos/'
var githubUrl = "https://github.com/ram-bor"

export default class Footer extends Component {
    render() {
        return (
            <div id="Footer">
                <div className="footer-bar">
                    <a href={bmcUrl}>
                        <FontAwesomeIcon icon={faCoffee} style=/>
                    </a>
                    <a href={linkedinUrl}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href={githubUrl} >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="mailto:roberto_c_ramos&#64;yahoo.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                    <a href="resume/Roberto_Ramos_Resume.pdf" target="_blank"><i className="fa fa-file-pdf-o"
                        aria-hidden="true"></i>
                    </a>
                    <p>Copyright &copy; Roberto Ramos 2020</p>
                </div>
            </div >
        )
    }
}
