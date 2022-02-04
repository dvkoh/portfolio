import React, { Component } from "react";

class ThumbnailListforPublications extends Component {
  constructor(props) {
    super(props);
    this.state = {op:0};
  }

  render() {
    return (
      <div className="list-thumbnail" 
        onMouseEnter={()=>this.setState({op:1})} onMouseLeave={()=>this.setState({op:0})}
      >
        <div style={{border:'solid 1px black', width:'calc(94vw - 50px)', marginLeft:'3vw'}}/>
        <div style={{border:'solid 1px white', marginTop:'-1px', width:'calc(94vw - 50px)', marginLeft:'3vw'}}/>
        <div className="jump flex">
          <div
            style={{
              width:'50vw',
              paddingLeft: '3vw',
              textTransform: 'uppercase',
              fontSize:'calc(1.5vw - 2px)', lineHeight:'calc(1.5vw + 3px)',
            }}
          >
            {this.props.title}
          </div>
          <div
            style={{
              paddingLeft: '13vw',
              width:'43.5vw',
              fontSize:'16px',
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

export default ThumbnailListforPublications;
