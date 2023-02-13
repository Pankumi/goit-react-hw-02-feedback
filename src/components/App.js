import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics.js';
import { Notification } from './Notification/Notification';
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
    const myCountTotalFeedback = this.countTotalFeedback(this.state);
    const myCountPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(this.state);
      // console.log(myCountTotalFeedback);
    return (
      <Box>
        <Section title="Please leave feedback">
          <Buttons>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.countResponse}
            ></FeedbackOptions>
          </Buttons>
        </Section>

        <Section title="Statistics">
          {myCountTotalFeedback ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={myCountTotalFeedback}
              positivePercentage={myCountPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Box>
    );
  }
}

// export default Statistics;
