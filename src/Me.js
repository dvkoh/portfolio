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
        <div className="p" style={{marginTop:'280px', width:'700px'}}>
          <span style={{fontSize:'18px', lineHeight:'31px', opacity:'.8'}}>{nl2br(this.props.context2)}</span>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={'https://drive.google.com/file/d/1zhedhmB03I3JURGPRHncx8noEPUw-Zbd/view?usp=sharing'}
          style={{ fontSize: "22px", marginTop: "9px"}}
        >
          CV ↗
        </a>
        <div style={{ fontSize: "18px"}}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/dvkoh/"}
            style={{ marginTop: "80px" }}
          >
            linkedIn ↗
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.instagram.com/dvkoh/"}
            style={{ marginTop: "115px" }}
          >
            instagram ↗
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://dvkoh.github.io/archive/"}
            style={{ marginTop: "150px" }}
          >
            archive ↗
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://dvkoh.github.io/booksbooksbooks/"}
            style={{ marginTop: "185px" }}
          >
            reading list ↗
          </a>
        </div>
      </div>
    );
  }
}

export default Me;
