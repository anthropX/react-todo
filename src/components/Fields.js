import React from "react";
import propTypes from "prop-types";

export default class Fields extends React.Component {
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

Fields.propTypes = {
  addToDo: propTypes.func.isRequired
};
