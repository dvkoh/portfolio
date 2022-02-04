import React, { Component } from "react";

class Waterfall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div
          className="wf"
          style={{marginLeft:'7.5vw'}}
        >
          <div>
              {this.props.port ? 
                  <img 
                      style={{width:'27vw', objectFit:'cover'}}
                      src={this.props.imgUrl} alt=""
                  />   
              :
                  <img 
                      style={{width:'27vw', height:'27vw', objectFit:'cover'}}
                      src={this.props.imgUrl} alt=""
                  />
          }
            <div style={{textAlign: 'center', color: 'black', lineHeight:'22px', width: '27vw', paddingLeft: '3vw', paddingRight: '3vw'}}>
              <p style={{marginTop: '1vw', marginBottom: '1px', fontSize:'18px'}}>
                <span style={{textTransform:'uppercase'}}>{this.props.title}</span>
              </p>
              <p style={{marginTop: '0', marginBottom: '3vw', fontSize:'17px'}}>
                {this.props.kw}, 20{this.props.year}
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Waterfall;
