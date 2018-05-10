import React, { Component } from 'react';
import Button from './calculatorButton';
    const STYLE = {
        calculatorKey: 'calculator__keys',
        keyOperator: 'key--operator',
        keyEquel: 'key--equal'
    };

    const RESOURCES = {
        DECIMAL : '.',
        CLEAR : 'AC',
        CALCULATE : '='
    };

    const OPERATOR = {
        ADD : '+',
        SUBSTRACT : '-',
        MULTIPLY : 'x',
        DIVIDE : '÷'
    };

    const NUMBERS = ['7','8','9','4','5','6','1','2','3','0'];


class Buttons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: '',
            storage : '',
            number: this.props.number,
            operator: ''
        }
    }

    handleOperation = (number) =>{
        console.log(number);
    };

    handleNumber = (number) =>{
        this.props.buttonClicked( number );

    };


    handleEqual = (number) =>{
        console.log(number);
    };

    render(){

        return (
            <div  className={STYLE.calculatorKey}>
                <Button style={STYLE.keyOperator} operation={this.handleOperation} value={OPERATOR.ADD} ></Button>
                <Button style={STYLE.keyOperator} operation={this.handleOperation} value={OPERATOR.SUBSTRACT} ></Button>
                <Button style={STYLE.keyOperator} operation={this.handleOperation} value={OPERATOR.MULTIPLY} ></Button>
                <Button style={STYLE.keyOperator} operation={this.handleOperation} value={OPERATOR.DIVIDE} ></Button>

                {NUMBERS.map((NUMBERS) => <Button  operation={this.handleNumber} value={NUMBERS} key={NUMBERS}>{NUMBERS}</Button>)}

                <Button operation={this.handleDecimal} value={RESOURCES.DECIMAL}></Button>
                <Button operation={this.handleClear} value={RESOURCES.CLEAR}></Button>
                <Button style={STYLE.keyEquel} operation={this.handleEqual} value={RESOURCES.CALCULATE}></Button>
          </div>
        )
    }
}

export default Buttons;

//
// <button className="key--operator" data-action="add">+</button>
// <button className="key--operator" data-action="subtract">-</button>
// <button className="key--operator" data-action="multiply">&times;</button>
// <button className="key--operator" data-action="divide">÷</button>
// <button>7</button>
// <button>8</button>
// <button>9</button>
// <button>4</button>
// <button>5</button>
// <button>6</button>
// <button>1</button>
// <button>2</button>
// <button onPress={check(1)}>3</button>
// <button>0</button>
// <button data-action="decimal">.</button>
// <button data-action="clear">AC</button>
// <button className="key--equal" data-action="calculate">=</button>