
import React, { Component } from 'react';


const Button = (props) => {
        return (
            <button className={props.style} onClick={() => { props.operation(props.value)}}> {props.value} </button>
        )
    };

export default Button;
