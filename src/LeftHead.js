import React from "react";

class LeftHead extends React.Component {
  constructor() {
    super();
    this.state = {
      name:'dongkoh'
    };
  }

  clickAction(){
    document.querySelector(':root').style.setProperty('--invert-state', getComputedStyle(document.querySelector(':root')).getPropertyValue('--invert-state') * -1);
    this.state.name==='dongkoh'?this.setState({name:'ęł ëě¤'}):this.setState({name:'dongkoh'})
  }

  render() {
    return (
      <div
        onClick={() => {this.clickAction()}}
      >
        <p style={{marginTop:'4px', fontSize:'calc(2vw + 0px)'}}>đđť {this.state.name}</p>
      </div>
    );
  }
}
export default LeftHead;
