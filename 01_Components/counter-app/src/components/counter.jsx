import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: "Lane",
      city: "youGanda",
      country: "kenia",
    },
  };

  // Method to handle incrementing the count
  countIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  render() {
        // Dynamic class assignment based on count value
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={this.countIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  } 


    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "text-bg-warning" : "text-bg-primary";
        return classes;
    }
}

export default Counter;


// countIncrement() {
//     // Increment the count state
//     this.setState(prevState =>({count:prevState.count + 2}));
//     this.setState(prevState => ({
//         count: prevState.count + 1
//     }));
// }
{
  /* <h1>Hello world</h1> */
}
{
  /* <h2>Count: {this.formatCount()}</h2> */
}
{
  /* <button onClick={this.countIncrement}>Increment</button>     */
}
