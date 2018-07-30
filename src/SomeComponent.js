import React from "react";
import PropTypes from "prop-types";

class SomeComponent extends React.Component {
  static propTypes = {
    /**
     * This is a required prop.
     *
     * With a multiple line description.
     *
     * After second line, causes error.
     */
    color: PropTypes.string
  };

  render() {
    return <div>Some Component</div>;
  }
}

export default SomeComponent;
