import React, { Component } from 'react';
import '../App.css'

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: props.heading,
            content: props.content,
            imageLink: props.imageUrL
        }

    }

    render() {
        return (
            <div id={this.state.heading} className="textBoxContainer">
                <h4>{this.state.heading}</h4>
                <div className="textBox">
                <p className="paragraphText">{this.state.content}</p>
                <img className="image" src={this.state.imageLink} alt={this.state.heading}/>
                </div>
            </div>
        )
    }
}

export default Box;