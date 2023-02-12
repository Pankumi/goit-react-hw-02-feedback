import React, { Component } from 'react';

export class FeedbackOptions extends Component {

  render() {
    const option = this.props.options;
    // console.log(this.props);
    return(
        <button type="button" data-name={option} onClick={this.props.onLeaveFeedback}>{option}</button>
    )
  }
}
