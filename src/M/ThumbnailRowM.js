import React, { Component } from "react";
import MediaQuery from "react-responsive";

class ThumbnailRow extends Component {
  constructor({ year, month, imgUrl, title, kw, context, linkUrl, id }) {
    super();
    this.state = {
      hover: false,
      intervalId: 0
    };
  }
  onHover = event => {
    this.setState({ hover: true });
  };
  onNotHover = event => {
    this.setState({ hover: false });
  };

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <div>
        <div
          className="row-thumbnailM"
          onMouseEnter={this.onHover}
          onMouseLeave={this.onNotHover}
          onClick={() => {
            this.scrollToTop();
          }}
        >
          <img
            src={this.props.imgUrl}
            alt=""
            className={this.state.hover ? "" : ""}
            style={{ objectFit: "cover" }}
          />
          <div class="text flex justify-between">
            <div class="">
              <p className="">
                <span
                  className={
                    this.state.hover ? "underline bold title" : "bold title"
                  }
                >
                  {this.props.title}
                </span>
                <br />
                <span className="nottitle stitle">
                  `{this.props.year} .{this.props.month}
                </span>
              </p>
            </div>
            <div>
              <p class="context">
                {this.props.context.substring(0, 70)} ...
                <br />
                <br />
                <br />
                {/* <span className="ar">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2192;
                </span> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThumbnailRow;
