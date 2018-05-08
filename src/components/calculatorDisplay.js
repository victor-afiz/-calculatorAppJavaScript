import React, { Component } from 'react';
import './calculatorDisplay.css';

class Display extends Component {
    render(){
        return (
            <div className="calculator__display">{this.props.result}</div>
        )
    }
}

export default Display;