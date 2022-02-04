import React from "react";

class MidHeadMe extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0
    };
  }
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
          onClick={() => {
            this.scrollToTop();
          }}
        >
          <span onClick={this.onModeMe}>and more on me</span>
        </div>
      </div>
    );
  }
}
export default MidHeadMe;
