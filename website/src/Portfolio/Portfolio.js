import React, { Component } from 'react'
import './Portfolio.css'
import { LoremIpsum } from 'react-lorem-ipsum'

export default class Portfolio extends Component {
    render() {
        return (
            <div id="Portfolio">
                <h1>Portfolio</h1>
                <LoremIpsum />
            </div>
        )
    }
}
