import React, { Component } from "react";
import '../style/cond.css'

class ConditionRender extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7"],
  };

  renderTags () {
        if(this.state.tags.length === 0 ) return <p>"There is not Tags</p>    
        else return this.state.tags.map(tag => <li key={tag}> {tag}</li> )
  }

 render() {
    return (
      <div className="d-flex justify-center align-center">
        <ul>
          {this.renderTags()}
        </ul>
      </div>
    );
  }

}

export default ConditionRender;
