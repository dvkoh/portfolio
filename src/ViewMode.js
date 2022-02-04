// import { getStringIfConstant } from "eslint-utils";
import React, { Component } from "react";

class ViewMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <div className="" style={{marginTop:'23px', fontSize: '15px', width: 'calc(100vw - 50px)', textAlign: 'right'}}>
          <p className="selection-button">
            ↓ Selection :
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              className={this.props.select === "all" ? "on" : ""}
              onClick={this.props.sall}
            >
              All
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ↓ View :
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              className={this.props.display === "gallery" ? "on" : ""}
              onClick={this.props.dgal}
            >
              Gallery
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              className={this.props.display === "waterfall" ? "on" : ""}
              onClick={this.props.dwat}
            >
              Waterfall
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              className={this.props.display === "list" ? "on" : ""}
              onClick={this.props.dlis}
            >
              Row
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default ViewMode;
