import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        // Binding 'this' to countIncrement method
        this.countIncrement = this.countIncrement.bind(this);
    }

    state = { 
        count: 1,
        address: {
            street: "Lane",
            city: "youGanda",
            country: "kenia",
        }
    };

    countIncrement() {
        // Increment the count state
        this.setState(prevState =>({count:prevState.count + 2}));
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    formatCount() {
        return this.state.count;
    }

    render() { 
        return (
            <div>
                <h1>Hello world</h1>
                <h2>Count: {this.formatCount()}</h2>
                <button onClick={this.countIncrement}>Increment</button>    
            </div>
        );
    }
}

export default Counter;
