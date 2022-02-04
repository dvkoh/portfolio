import React, { Component } from "react";
import "tachyons";
import MediaQuery from "react-responsive";
// import "animate.css/animate.min.css";

import Brr from "./Brr";
import BrrM from "./M/BrrM";

import hd from "./HomeData";
import pd from "./PageData";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      home_cms: hd,
      page_cms: pd,
    };
  }

  componentDidMount() {
    this.setState({ home_cms: hd });
    this.state.home_cms.map((obj, i) => {
      console.log(obj.imgurl);
    });
  }

  render() {
    return (
      <div>
        <div className="web">
          <MediaQuery minDeviceWidth={700}>
            <Brr
              home_cms={this.state.home_cms}
              page_cms={this.state.page_cms}
            />
          </MediaQuery>
        </div>
        <div className="mobile">
          <MediaQuery maxDeviceWidth={700}>
            <BrrM home_cms={this.state.home_cms} />{" "}
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Main;
