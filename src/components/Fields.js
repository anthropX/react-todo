import React from "react";
import { render } from "@testing-library/react";

class Fields extends React.Component {
  render() {
    return (
      <div id="fields">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          style={{ flex: "1 1 auto" }}
        />
        <button onClick={this.props.addToDo}>Submit</button>
      </div>
    );
  }
}

export default Fields;
