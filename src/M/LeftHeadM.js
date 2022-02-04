import React from "react";

class LeftHeadM extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      intervalId: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (this.state.display === false && window.scrollY > 0)
      this.setState({ display: true });
    if (this.state.display === true && window.scrollY === 0)
      this.setState({ display: false });
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
      <div
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <p>
          <span className="">
            Dong-yoon <span class="bold">Koh</span>
            <br />
            27, Male, Single
            <br />
            based in <span class="bold">Seoul, Korea</span>
            <br />
            topdavid @ kaist.ac.kr
          </span>
        </p>
      </div>
    );
  }
}
export default LeftHeadM;
