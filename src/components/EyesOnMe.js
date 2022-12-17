// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    focusEyes() {
        console.log("Good!")
    }

    heyOverHere() {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return <button onFocus={this.focusEyes} 
                       onBlur={this.heyOverHere} >"Click me!"</button>
    }
}