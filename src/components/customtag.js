import React from "react";
import { useAlert } from "react-alert";
class CustomTag extends React.Component {
  constructor(props) {
    super(props);
    this.onManualClick = this.onManualClick.bind(this);
  }
  onManualClick() {}
  render() {
    return (
      <div
        role="button"
        tabIndex="0"
        onClick={this.onManualClick}
        className="btn btn-primary btn-large"
      >
        Click me!
      </div>
    );
  }
}
export default CustomTag;
