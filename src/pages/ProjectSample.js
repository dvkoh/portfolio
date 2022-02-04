import React, { Component } from "react";

import Draggable from "react-draggable";
import nl2br from "react-newline-to-break";

class ProjectSample extends Component {
  constructor(props) {
    super(props);
    // this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      // intervalId: 0,
      // top: true,
      // display: "down",
      dragging: false
    };
  }
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }
  // handleScroll(event) {
  //   if (window.scrollY > 700) this.setState({ display: "up" });
  //   else this.setState({ display: "down" });
  // }
  // scrollStepUp() {
  //   if (window.pageYOffset === 0) {
  //     clearInterval(this.state.intervalId);
  //   }
  //   window.scroll(0, window.pageYOffset - 10);
  // }
  // scrollStepDown() {
  //   if (window.pageYOffset > window.innerHeight * 1.1) {
  //     clearInterval(this.state.intervalId);
  //   }
  //   window.scroll(0, window.pageYOffset + 10);
  // }
  // scrollthis() {
  //   if (this.state.display !== "down") {
  //     let intervalId = setInterval(this.scrollStepUp.bind(this), 2);
  //     this.setState({ intervalId: intervalId });
  //   } else {
  //     let intervalId = setInterval(this.scrollStepDown.bind(this), 2);
  //     this.setState({ intervalId: intervalId });
  //   }
  // }
  // buttonState() {
  //   if (window.pageYOffset > 150) {
  //     return this.setState({ display: "down" });
  //   } else return this.setState({ display: "up" });
  // }

  render() {
    // let p1, p2, p3, p4, p5;
    const setwhite = {
      color: "white"
    };
    const drag = () => {
      this.setState({ dragging: false });
    };
    const dragstop = () => {
      this.setState({ dragging: false });
    };
    return (
      <div style={{position:'fixed', top:'0px', left:'0px', zIndex:'50'}}>
        <div style={{backgroundColor:'white', width:'calc(100vw)', height:'calc(100vh)', opacity:'.9'}}/>
        {this.props.page_cms.map((obj, i) => {
          switch (obj.title) {
            case this.props.title:
              return(
                <div>
                  <div style={{position:'absolute', top:'calc(0vh)', left:'20vw'}}>
                    <Draggable
                      handle=".handle"
                      defaultPosition={{ x: 200, y: 0 }}
                      axis="x"
                      position={null}
                      onStart={this.handleStart}
                      onDrag={this.handleDrag}
                      onStop={this.handleStop}
                      onMouseDown={drag}
                      onTouchEnd={dragstop}
                    >
                      <div className="handle flex items-center" style={{ cursor: "ew-resize", width: '5000px'}}>
                        <div style={{width:'0px', marginTop:'0px', height:'calc(100vh)'}}/>
                        {/* <embed src="https://www.naver.com"></embed> */}
                        {obj.page1!=='-'?
                          <img
                            src={obj.page1}
                            alt={obj.page1}
                            draggable="false"
                            style={{marginRight:'5px', maxHeight:'90vh', maxWidth: '60vw', boxShadow:'0px 0px 3px rgba(0,0,0,.15)'}}
                          />:
                          <div/>
                        }
                        {obj.page2!=='-'?
                        <img
                          src={obj.page2}
                          alt={obj.page2}
                          draggable="false"
                          style={{marginRight:'5px', maxHeight:'90vh', maxWidth: '60vw', boxShadow:'0px 0px 3px rgba(0,0,0,.15)'}}
                          />:
                        <div/>
                        }
                        {obj.page3!=='-'?
                          <img
                            src={obj.page3}
                            alt={obj.page3}
                            draggable="false"
                            style={{marginRight:'5px', maxHeight:'90vh', maxWidth: '60vw', boxShadow:'0px 0px 3px rgba(0,0,0,.15)'}}
                          />:
                          <div/>
                        }
                        {obj.page4!=='-'?
                          <img
                            src={obj.page4}
                            alt={obj.page4}
                            draggable="false"
                            style={{marginRight:'5px', maxHeight:'90vh', maxWidth: '60vw', boxShadow:'0px 0px 3px rgba(0,0,0,.15)'}}
                          />:
                          <div/>
                        } 
                        {obj.page5!=='-'?
                          <img
                            src={obj.page5}
                            alt={obj.page5}
                            draggable="false"
                            style={{marginRight:'5px', maxHeight:'90vh', maxWidth: '60vw', boxShadow:'0px 0px 3px rgba(0,0,0,.15)'}}
                          />:
                          <div/>
                        }
                        {obj.page6!=='-'?
                          <img
                            src={obj.page6}
                            alt={obj.page6}
                            draggable="false"
                            style={{marginRight:'5px', maxHeight:'90vh', maxWidth: '60vw', boxShadow:'0px 0px 3px rgba(0,0,0,.15)'}}
                          />:
                          <div/>
                        }
                      </div>
                    </Draggable> 
                  </div> 
                  <div 
                    style={{
                      position:'absolute', top:'-0px', left:'20px', color:'black', 
                      width:'20vw', height: 'calc(100vh - 20px)', 
                      // backgroundColor:'red',
                      fontSize:'14px', lineHeight:'18px'
                    }}
                  >
                    <div style={{position:'absolute', top:'0px', left:'-20px', height:'calc(100vh)', width:'calc(20vw + 90px)', backgroundColor:'white', opacity:'1'}}/>
                    <div style={{marginLeft: "0px", opacity:'.9'}}>
                      <p style={{textTransform:'uppercase', fontWeight:'00'}}>{obj.title} &nbsp;|&nbsp; {obj.title2}</p>
                      <br/><p style={{}}>{obj.kw}</p>
                      {/* <p style={{}}>{obj.skill}</p> */}
                      <p style={{}}>{obj.role}</p>
                      <p style={{}}>20{obj.year} . {obj.month}</p>
                      <p style={{}}>{nl2br(obj.blurb)}</p>
                      {obj.linkurl!=='-'? <p><a href={obj.linkurl} target="_blank" rel="noopener noreferrer" style={{color:'rgb(255, 0, 150)'}}>link ↗</a></p> : <div/>} 
                    </div>
                  </div>
                  <a 
                    href="javascript:history.back()" 
                    style={{
                      position:'absolute', top:'10px', left:'calc(20vw + 50px)', color:'black'
                    }}
                  >
                    ←
                  </a>
                </div>
              )
          }})}
          <div 
          style={{
            position:'absolute', top:'0px', left:'calc(20vw + 90px)', 
            width:'1px', height:'calc(100vh)', backgroundColor:'black'
          }}
          />
          <a 
            href="javascript:history.back()" 
            style={{
              position:'absolute', top:'12px', right:'calc(20px)', color:'black'
            }}
          >
            x
          </a>
      </div>
    );
  }
}

export default ProjectSample;