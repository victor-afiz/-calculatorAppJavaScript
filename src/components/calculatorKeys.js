
import React, { Component } from 'react';
import './calculatorKeys.css';

class Keys extends Component {
    render(){
        const check = (e) => {
            console.log(e);
        };
        return (
        <div  className="calculator__keys">
        <button className="key--operator" data-action="add">+</button>
        <button className="key--operator" data-action="subtract">-</button>
        <button className="key--operator" data-action="multiply">&times;</button>
        <button className="key--operator" data-action="divide">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button onPress={check(1)}>3</button>
        <button>0</button>
        <button data-action="decimal">.</button>
        <button data-action="clear">AC</button>
        <button className="key--equal" data-action="calculate">=</button>
      </div>
        )
    }
}

export default Keys;