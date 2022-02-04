import React from "react";

class MidHeadMe extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <span onClick={this.onModeProjects}>Projects</span>
      </div>
    );
  }
}
export default MidHeadMe;
