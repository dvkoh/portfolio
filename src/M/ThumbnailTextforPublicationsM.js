import React, { Component } from "react";
import MediaQuery from "react-responsive";

class ThumbnailTextforPublicationsM extends Component {
  constructor({ at, title, kw, context, linkUrl, id }) {
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
          <div class="textM flex justify-between">
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
                <span className="nottitle stitle">`{this.props.at}</span>
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

export default ThumbnailTextforPublicationsM;
