
import React, { Component } from "react";

export class Statistics extends Component {
  static defaultProps = {};
  static propTypes = {};
    // стани при завантаженні
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // метод для зміни стану при натисканні кнопки - з події достаєтьс натиснута кнопка - відповідний стан + 1
  AddResponse = (e) => {
    const buttonClick = e.target.dataset.name;
    // console.log(this.state[buttonClick]);

    this.setState({
        [buttonClick]: this.state[buttonClick] + 1,
    })
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" data-name="good" onClick={this.AddResponse} >Good</button>
          <button type="button" data-name="neutral" onClick={this.AddResponse} >Neutral</button>
          <button type="button" data-name="bad" onClick={this.AddResponse}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
        </div>
        ;
      </>
    );
  }
};

// export default Statistics;
