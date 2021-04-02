import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default class Footer extends Component {
    render() {
        return (
            <div id="Footer">
                <div className="footer-bar">
                    <FontAwesomeIcon icon={faCoffee} />
                    <li className="footer-item">
                        <a href="https://www.linkedin.com/in/rob-ramos/" target="_blank"><i className="fa fa-linkedin"
                            aria-hidden="true"></i></a>
                    </li>
                    <li className="footer-item">
                        <a href="https://github.com/ram-bor" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li className="footer-item">
                        <a href="mailto:roberto_c_ramos&#64;yahoo.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                    </li>
                    <li className="footer-item">
                        <a href="resume/Roberto_Ramos_Resume.pdf" target="_blank"><i className="fa fa-file-pdf-o"
                            aria-hidden="true"></i>
                        </a>
                    </li>
                    {/* <li className="footer-item">
                        <p>Copyright &copy; Roberto Ramos 2020</p>
                    </li> */}
                </div>
            </div >
        )
    }
}
