import React, { Component } from "react";
import Draggable from "react-draggable";
import nl2br from "react-newline-to-break";

class PublicationSample extends Component {
  constructor({ cms, title }) {
    super({ cms, title });
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      intervalId: 0,
      top: true,
      display: "down",
      dragging: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY > 700) this.setState({ display: "up" });
    else this.setState({ display: "down" });
  }
  scrollStepUp() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 10);
  }
  scrollStepDown() {
    if (window.pageYOffset > window.innerHeight * 1.1) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset + 10);
  }
  scrollthis() {
    if (this.state.display !== "down") {
      let intervalId = setInterval(this.scrollStepUp.bind(this), 2);
      this.setState({ intervalId: intervalId });
    } else {
      let intervalId = setInterval(this.scrollStepDown.bind(this), 2);
      this.setState({ intervalId: intervalId });
    }
  }
  buttonState() {
    if (window.pageYOffset > 150) {
      return this.setState({ display: "down" });
    } else return this.setState({ display: "up" });
  }

  render() {
    let p1, p2, p3, p4, p5;
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
      <div className="">
        {this.props.cms.map((obj, i) => {
          switch (obj.gsx$title.$t) {
            case this.props.title:
              if (obj.gsx$page1.$t !== "") {
                p1 = (
                  <img
                    src={obj.gsx$page1.$t}
                    alt="oops"
                    className="portimg1"
                    draggable="false"
                  />
                );
              } else {
                p1 = <div />;
              }
              if (obj.gsx$page2.$t !== "") {
                p2 = (
                  <img
                    src={obj.gsx$page2.$t}
                    alt="oops"
                    className="portimg2"
                    draggable="false"
                  />
                );
              } else {
                p2 = <div />;
              }
              if (obj.gsx$page3.$t !== "") {
                p3 = (
                  <img
                    src={obj.gsx$page3.$t}
                    alt="oops"
                    className="portimg3"
                    draggable="false"
                  />
                );
              } else {
                p3 = <div />;
              }
              if (obj.gsx$page4.$t !== "") {
                p4 = (
                  <img
                    src={obj.gsx$page4.$t}
                    alt="oops"
                    className="portimg4"
                    draggable="false"
                  />
                );
              } else {
                p4 = <div />;
              }
              if (obj.gsx$page5.$t !== "") {
                p5 = (
                  <img
                    src={obj.gsx$page5.$t}
                    alt="oops"
                    className="portimg5"
                    draggable="false"
                  />
                );
              } else {
                p5 = <div />;
              }

              const setbg = {
                backgroundColor: obj.gsx$bgcol.$t
              };
              const setcol = {
                color: obj.gsx$col.$t
              };
              return (
                <div className="pages">
                  <div>
                    <div className="headtext">
                      <p className="side">
                        `{obj.gsx$year.$t}. {obj.gsx$month.$t}
                      </p>
                      <p className="title">{obj.gsx$title.$t}</p>
                    </div>
                    <img
                      src={obj.gsx$mainimgurl.$t}
                      alt=""
                      className="mainimg"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="down-wrap">
                      <p
                        className={
                          this.state.display === "down"
                            ? "down transition rotate"
                            : "down transition"
                        }
                        style={
                          this.state.display === "down" ? setwhite : setcol
                        }
                        onClick={() => {
                          this.scrollthis();
                        }}
                      >
                        ↑
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="mainbod">
                      <div className="blurb" style={setcol}>
                        {nl2br(obj.gsx$blurb.$t)}
                      </div>
                      <Draggable
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        axis="x"
                        position={null}
                        onStart={this.handleStart}
                        onDrag={this.handleDrag}
                        onStop={this.handleStop}
                        onMouseDown={drag}
                        onTouchEnd={dragstop}
                      >
                        <div className="handle" style={{ cursor: "ew-resize" }}>
                          {p5}
                          {p4}
                          {p3}
                          {p2}
                          {p1}
                        </div>
                      </Draggable>
                      <div className="bg2" style={setbg} />
                    </div>
                    <p className="blurb-side" style={setcol}>
                      {obj.gsx$info1.$t}
                      <br />
                      {obj.gsx$info2.$t}
                      <br />
                      {obj.gsx$info3.$t}
                      <br />
                      {obj.gsx$info4.$t}
                      <br />
                      <br />
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={obj.gsx$linkurl.$t}
                        style={setcol}
                      >
                        {obj.gsx$linkurl.$t !== "n/a" ? "Link ↗" : ""}
                      </a>
                    </p>
                  </div>
                  <div className="bg" style={setbg} />
                </div>
              );
            default:
              break;
          }
        })}
      </div>
    );
  }
}

export default PublicationSample;
