import React, { Component } from "react";

class Dots extends Component {
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
            zIndex: 100,
            left: "calc(50vw - 607px + 120px + " + this.props.x * .8 + "px)",
            top: "calc(50vh - 373px  + 80px + " + this.props.y * .8 + "px)",
          }}
        >
          <ellipse
            cx="10"
            cy="10"
            rx="7"
            ry="7"
            stroke="white"
            fill={this.state.hover ? "white" : "none"}
            strokeWidth="1"
          />
        </svg>
        <p1
          className={this.state.hover ? "" : "none"}
          style={{
            position: "absolute",
            zIndex: 100,
            left: "calc(50vw - 607px + 120px + " + this.props.x * .8 + "px)",
            top: "calc(50vh - 373px  + 80px - 35px + " + this.props.y * .8 + "px)",
            fontSize: "calc(2vw + 4px)"
          }}
        >
          {this.props.title} <span>(20{this.props.year})</span>
        </p1>
      </div>
    );
  }
}

export default Dots;
