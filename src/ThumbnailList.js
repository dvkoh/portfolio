import React, { Component } from "react";

class ThumbnailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false, 
      x:0, 
      y:0, 
      y2:0
    };
  }
  logMousePosition = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  }; 
  handleScroll = e => {
    this.setState({
      y2: document.documentElement.scrollTop
    })
}

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        <img 
          src={this.props.imgUrl} 
          alt=""
          style={{position:'absolute', top:this.state.y + this.state.y2 - document.documentElement.clientHeight*1 - 200 +'px', left:this.state.x+'px', width:'30vw'}}
          className={
            this.state.hover ? "" : "none"
          }
          onMouseEnter={()=>this.setState({hover:true})} onMouseLeave={()=>this.setState({hover:false})}
        />
        {this.state.x},{this.state.y}
        <div className="list-thumbnail" 
        >
          <div style={{border:'solid 1px black', width:'calc(80vw - 50px)', marginLeft:'10vw'}}/>
          <div style={{border:'solid 1px white', marginTop:'-1px', width:'calc(90vw)', marginLeft:'5vw'}}/>
          <div className="jump flex">
            <div
              style={{
                width:'30vw',
                marginLeft:'10vw',
                textTransform: 'uppercase',
                fontSize:'calc(35px)', 
                lineHeight:'calc(40px)',
              }}
            >
              <span onMouseEnter={()=>this.setState({hover:true})} onMouseLeave={()=>this.setState({hover:false})}>{this.props.title}</span>
            </div>
            <div
              style={{
                paddingLeft: '10vw',
                width:'47vw',
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
      </div>
    );
  }
}

export default ThumbnailList;
