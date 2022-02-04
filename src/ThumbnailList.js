import React, { Component } from "react";

class ThumbnailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  imgOrder: [this.props.imgUrl, this.props.imgUrl2, this.props.imgUrl3],
                  countOrder: 1,
                  op:0};
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
      <div className="list-thumbnail" 
        onMouseEnter={()=>this.setState({op:1})} onMouseLeave={()=>this.setState({op:0})}
      >
        <div style={{border:'solid 1px black', width:'calc(80vw - 50px)', marginLeft:'10vw'}}/>
        <div style={{border:'solid 1px white', marginTop:'-1px', width:'calc(90vw)', marginLeft:'5vw'}}/>
        <div className="jump flex">
          <div
            style={{width:'12vw', marginLeft: '10vw', marginBottom: '10px', zIndex: '0'}} 
          >
            <img 
            src={this.state.imgOrder[0]} 
            alt=""
            style={{width:'12vw', height:'12vw', objectFit: 'cover'}}
          />
          <p
              style={{
                marginTop: "calc(-34px)",
                marginLeft: "calc(15vw)"
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
                marginTop: "calc(-43px)",
                marginLeft: "calc(calc(15vw + 39px))",
                width: '100px'
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
            style={{
              width:'11vw',
              paddingLeft: '3vw',
              textTransform: 'uppercase',
              fontSize:'calc(1.5vw + 2px)', lineHeight:'calc(1.5vw + 5px)',
            }}
          >
            {this.props.title}
          </div>
          <div
            style={{
              paddingLeft: '23vw',
              width:'53.5vw',
              fontSize:'16px', lineHeight:'',
              marginBottom: '30px'
            }}
          >
            {this.props.kw}, 20{this.props.year}
            <br/><br/><br/>
            {this.props.context}&nbsp;<span style={{fontWeight:''}}>{this.props.ggo}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ThumbnailList;
