import React, { Component } from "react";

class Home2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* 벤다이어그램 */}
        <div className='me-draw'>
          <div className="titles">
            <p
              style={{
                top: "calc(50vh - 373px + 500px - 0px)",
                left: "-80px",
                transform: "rotate(40deg)",
                fontWeight: "700",
                background: "black"
              }}
            >&nbsp;UI&nbsp;</p>
            <p
              style={{
                top: "calc(50vh - 373px + 128px)",
                left: "600px",
                transform: "rotate(37deg)",
                fontWeight: "700",
                background: "black"
              }}
            >&nbsp;UX&nbsp;</p>
            <p
              style={{
                top: "calc(50vh - 373px + 410px)",
                left: "-100px",
                transform: "rotate(40deg)",
                background: "black"
              }}
            >&nbsp;prototyping&nbsp;</p>
            <p
              style={{
                top: "calc(50vh - 373px + 220px)",
                left: "90px",
                transform: "rotate(0deg)",
                color: "rgb(50,50,50)",
                background: "black"
              }}
            >&nbsp;web&nbsp;</p>
            <p
              style={{
                top: "calc(50vh - 373px + 108px)",
                left: "255px",
                transform: "rotate(0deg)",
                background: "black"
              }}
            >&nbsp;design&nbsp;</p>
            <p
              style={{
                top: "calc(50vh - 373px + 150px)",
                left: "245px",
                transform: "rotate(0deg)",
                color: "rgb(50,50,50)",
                background: "black"
              }}
            >&nbsp;interaction&nbsp;</p>
            <p
              style={{
                top: "calc(50vh - 373px + 208px)",
                left: "568px",
                transform: "rotate(0deg)",
                background: "black"
              }}
            >&nbsp;research&nbsp;</p>
            <p
              style={{
                top: "calc(50vh - 373px + 423px)",
                left: "760px",
                transform: "rotate(0deg)",
                background: "black"
              }}
            >&nbsp;data&nbsp;</p>
          </div>
          <svg height="748px" width="1217px" transform="scale(.8)">
          <ellipse
              cx="277px"
              cy="345px"
              rx="257px"
              ry="165px"
              stroke="rgb(255,255,255)"
              strokeWidth="1"
              fill="none"
              key="proto"
            />
            <ellipse
              cx="295px"
              cy="283px"
              rx="80px"
              ry="80px"
              stroke="rgb(50,50,50)"
              strokeWidth="1"
              fill="none"
              key="web"
              stroke-dasharray="4 4"
            />
            <ellipse
              cx="514px"
              cy="280px"
              rx="330px"
              ry="165px"
              stroke="rgb(50,50,50)"
              strokeWidth="1"
              fill="none"
              key="interaction"
              stroke-dasharray="4 4"
            />
            <ellipse
              cx="608px"
              cy="375px"
              rx="496px"
              ry="372px"
              stroke="white"
              strokeWidth="3"
              fill="none"
              key="UX"
            />
            <ellipse
              cx="279px"
              cy="369px"
              rx="277px"
              ry="277px"
              stroke="white"
              strokeWidth="3"
              fill="none"
              key="UI"
            />
            <ellipse
              cx="514px"
              cy="374px"
              rx="380px"
              ry="310px"
              stroke="white"
              strokeWidth="1"
              fill="none"
              key="design"
            />
            <ellipse
              cx="903px"
              cy="369px"
              rx="180px"
              ry="180px"
              stroke="white"
              strokeWidth="1"
              fill="none"
              key="research"
            />
            <ellipse
              cx="1125px"
              cy="371px"
              rx="90px"
              ry="90px"
              stroke="white"
              strokeWidth="1"
              fill="none"
              key="data"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Home2;
