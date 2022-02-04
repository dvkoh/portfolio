import React, { Component } from "react";

class Foot extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <footer style={{fontSize:'12px', opacity:'.5', marginBottom:'18px'}}>&copy; Copyright 2021 Dong-yoon Koh</footer>
  }
}

export default Foot;
