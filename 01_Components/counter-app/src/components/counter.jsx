import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags : ['tag1','tag2','tag3']
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
        
        <ul>
            {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
        </ul>

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
