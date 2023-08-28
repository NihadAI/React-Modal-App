import React, { Component } from 'react';
import './button.scss';

class Button extends Component {
    render() {
        const { backgroundColor, width, text, onClick } = this.props;
        const buttonStyle = {
            backgroundColor: backgroundColor,
            width: width,
        };
        return (
            <button className="button" style={buttonStyle} onClick={onClick}>
                {text}
            </button>
        );
    }
}
export default Button;
