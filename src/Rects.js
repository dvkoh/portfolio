import React, { Component } from "react";

class Rects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  hoverIn = (event) => {
    this.setState({ hover: true });
  };
  hoverOut = (event) => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <div
        style={{ cursor: "pointer" }}
        onMouseEnter={this.hoverIn}
        onMouseLeave={this.hoverOut}
      >
        <svg
          height="20"
          width="20"
          style={{
            position: "absolute",
            left: "calc(50vw - 607px + 105px + " + this.props.x * .8 + "px)",
            top: "calc(50vh - 373px  + 80px + " + this.props.y * .8 + "px)",
          }}
        >
          <rect
            x="1"
            y="1"
            width="12"
            height="12"
            stroke="white"
            fill={this.state.hover ? "white" : "none"}
          />
        </svg>
        <p1
          className={this.state.hover ? "" : "none"}
          style={{
            position: "absolute",
            left: "calc(50vw - 607px + 105px + " + this.props.x * .8 + "px)",
            top: "calc(50vh - 373px  + 80px + 30px + " + this.props.y * .8 + "px)",
            fontSize: "calc(1vw + 4px)",
            zIndex: '10',
            lineHeight: 'calc(1vw + 8px)'
          }}
        >
          {this.props.title} <span>(20{this.props.year})</span>
        </p1>
      </div>
    );
  }
}

export default Rects;
