import React, { Component } from 'react';
import Buttons from "./calculatorButtons";
import Display from './calculatorDisplay';
class Calculator extends Component {
      state = { result : '0'};

      changeDisplay = (number) => {
        this.setState({result : number});
        console.log(number);
    };
    render(){


       const calculate = (num1,operator,num2) => {

        };

        return (
            <div className="calculator">
                <Display result={this.state.result} />
                <Buttons number={this.state.result} buttonClicked={this.changeDisplay} />
            </div>

        )
    }
}

export default Calculator;