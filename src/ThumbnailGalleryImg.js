import React, { Component } from "react";

class ThumbnailGalleryImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgOrder: [this.props.imgUrl, this.props.imgUrl2, this.props.imgUrl3],
      countOrder: 1,
      hover: false
    };
  }
  goRight(event) {
    let firstNum = this.state.imgOrder.shift();
    var curCount = this.state.countOrder;
    var nextCount = curCount + 1;
    if (nextCount === 4) {
      nextCount = 1;
    }
    this.setState({ imgOrder: this.state.imgOrder.concat(firstNum) });
    this.setState({ countOrder: nextCount });
  }
  goLeft(event) {
    let lastNum = this.state.imgOrder.pop();
    var curCount = this.state.countOrder;
    var nextCount = curCount - 1;
    if (nextCount === 0) {
      nextCount = 3;
    }
    this.setState({ imgOrder: [lastNum].concat(this.state.imgOrder) });
    this.setState({ countOrder: nextCount });
  }
  render() {
    return (
      <div>
        <div style={{border:'solid 1px black', width:'calc(70vw)', marginLeft:'15vw'}}/>
        <div style={{border:'solid 1px white', marginTop:'-1px', width:'calc(80vw)', marginLeft:'10vw'}}/>
        <div className="gallery-thumbnail">
          <div
            className="flex items-top"
            style={
              {
                marginTop: "20px"
              }
            }
          >
            <div className="text1">
              <p 
                style={{
                  fontSize:'calc(2vw + 2px)', 
                  lineHeight:'calc(2vw + 5px)', 
                  marginTop:'15px', 
                  width:'200px',
                  textTransform: 'uppercase'
                }}
              >
                <span>{this.props.title}</span>
              </p>
            </div>
            <div>
              <p 
                style={{
                  fontSize:'calc(2vw + 2px)', 
                  lineHeight:'calc(2vw + 4px)', 
                  marginTop:'15px', 
                  width:'200px', 
                  marginLeft:'150px'
                }}
              >
                  {this.props.kw} </p>
            </div>
            <div className="text2">
              <p 
                style={{
                  width:'calc(70vw - 700px)'
                }}
              >
                {this.props.context}&nbsp;<span style={{fontSize:''}}>{this.props.ggo}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="GLimg">
          <p
          style={{
              marginTop:'54px'
            }}>
            20{this.props.year}
          </p>
          <p
            style={{
              marginTop: "-27px",
              marginLeft: "calc(350px)"
            }}
          >
            <span
              style={{ cursor: "w-resize" }}
              onClick={() => {
                this.goLeft();
              }}
            >
              ←
            </span>
            &nbsp;&nbsp;
            <span
              style={{
                opacity: 0.4
              }}
            >
              {this.state.countOrder}
            </span>
          </p>
          <p
            style={{
              marginTop: "-28px",
              marginLeft: "calc(389px)",
              marginBottom: '50px'
            }}
          >
            <span>/ 3&nbsp;&nbsp;</span>
            <span
              style={{ cursor: "e-resize" }}
              onClick={() => {
                this.goRight();
              }}
            >
              →
            </span>
            {this.props.plsWork}
          </p>
        </div>

        <div
          className="gallery-img-thumbnail flex items-end"
          onClick={() => {
            this.goRight();
          }}
        >
          <img 
            src={this.state.imgOrder[0]} 
            alt={this.state.imgOrder[0]} 
          />
          <img
            src={this.state.imgOrder[1]}
            alt=""
            style={{
              opacity: '0'
            }}
          />
        </div>
      </div>
    );
  }
}

export default ThumbnailGalleryImg;
