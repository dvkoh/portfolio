import React, { Component } from "react";
import nl2br from "react-newline-to-break";
// import Foot from "./Foot";

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="me">
        <div className="p" style={{width:'750px'}}>
        <span style={{fontSize:'22px', lineHeight:'35px'}}>{nl2br(this.props.context1)}</span>
        </div>
        <div className="p" style={{marginTop:'280px', width:'660px'}}>
          <span style={{fontSize:'18px', lineHeight:'31px', opacity:'.8'}}>{nl2br(this.props.context2)}</span>
        </div>
        <div style={{ fontSize: "22px"}}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://drive.google.com/file/d/1zhedhmB03I3JURGPRHncx8noEPUw-Zbd/view?usp=sharing'}
            style={{ marginTop: "75px"}}
            >
            CV →
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://drive.google.com/file/d/1GWxNvmv2PtKaTQKJegm8qBbdNAZGiqmk/view?usp=sharing'}
            style={{ marginTop: "110px" }}
            >
            portfolio →
          </a>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/dvkoh/"}
            style={{ marginTop: "180px" }}
          >
            linkedIn ↗
          </a> */}
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.instagram.com/dvkoh/"}
            style={{ marginTop: "180px" }}
          >
            instagram ↗
          </a> */}
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://dvkoh.github.io/archive/"}
            style={{ marginTop: "185px" }}
          >
            archive ↗
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://dvkoh.github.io/booksbooksbooks/"}
            style={{ marginTop: "220px" }}
          >
            reading list ↗
          </a> */}
        </div>
      </div>
    );
  }
}

export default Me;
