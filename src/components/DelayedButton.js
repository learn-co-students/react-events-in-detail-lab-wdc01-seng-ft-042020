// Code DelayedButton Component Here
import React, { Component } from 'react'


export default class DelayedButton extends Component {

    myBleedingFunction = (e) => {

        e.persist() // this is the key to the entire lesson.
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }


    render() {
        return <button onClick={this.myBleedingFunction}>BUTTON DELAYED </button>
    }
}
