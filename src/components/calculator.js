import React, { Component } from 'react';
import './calculator.css';
import Display from './calculatorDisplay';
import Keys from './calculatorKeys';

class Calculator extends Component {
    render(){
        return (
            <div className="calculator">
            <Display result="1"></Display>
            <Keys/>
            </div>

        )
    }
}

export default Calculator;