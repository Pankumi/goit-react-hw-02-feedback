
import React, { Component } from 'react';
import { Section } from './Section/Section'
import { Statistics } from './Statistics/Statistics.js';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Box, Buttons } from './App.styled';

export class App extends Component {
  // стани при завантаженні
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // метод для зміни стану при натисканні кнопки - з події достаєтьс натиснута кнопка - відповідний стан + 1
  countResponse = e => {
    const buttonClick = e.target.dataset.name;
    // console.log(this.state[buttonClick]);
    this.setState({
      [buttonClick]: this.state[buttonClick] + 1,
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    // console.log(e);
    return 0 + good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return good ? Math.round((100 / (good + neutral + bad)) * good) : 0;
  };

  render() {
    return (
      <Box>
        <Section title="Please leave feedback">
          <Buttons>
            <FeedbackOptions options="good" onLeaveFeedback={this.countResponse}></FeedbackOptions>
            <FeedbackOptions options="neutral" onLeaveFeedback={this.countResponse}></FeedbackOptions>
            <FeedbackOptions options="bad" onLeaveFeedback={this.countResponse}></FeedbackOptions>
          </Buttons>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(this.state)}>
          </Statistics>
        </Section>
      </Box>
    );
  }
}

// export default Statistics;
