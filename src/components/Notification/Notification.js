import React, { Component } from 'react';

export class Notification extends Component {

    render() {
        return (
            <p>{this.props.message}</p>
        )
    }
}