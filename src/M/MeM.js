import React, { Component } from "react";
import nl2br from "react-newline-to-break";
import FootM from "./FootM";

class MeM extends Component {
  constructor({ context, linkUrl }) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="meM">
          <p>
            {nl2br(this.props.context)}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={this.props.linkUrl}
            >
              CV &#x2197;
            </a>
            <FootM />
          </p>
        </div>
      </div>
    );
  }
}

export default MeM;
