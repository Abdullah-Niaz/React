import React,{Component} from "react";

class HandleEvents extends Component {
    // binding event handlers
    // constructor(){
    //     super();
    //     console.log(this)
    //     this.HandleIncrement = this.HandleIncrement.bind(this);

    // }
    state = {  
        count : 1
    }

    // it works with binding 
    // HandleIncrement (){   
    //     console.log("increment Value ", this);
    // }

    // ES6 Fucntion fetches the refrences automatically
    HandleIncrement = () => {   
        console.log("increment Value ", this);
    }
    render() { 
        return (  
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.HandleIncrement}>Increment</button>
            </div>
        );
    }
}
 
export default HandleEvents;