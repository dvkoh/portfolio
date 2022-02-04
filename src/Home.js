import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* 벤다이어그램 */}
        <div className="me-draw">
          <div className="titles">
            <p
              style={{
                top: "calc(47vh - 368px + 520px)",
                left: "37px",
                transform: "rotate(45deg)",
                fontWeight: "700",
                background: "black"
              }}
            >
              &nbsp;design&nbsp;
            </p>
            <p
              style={{
                top: "calc(47vh - 368px + 276px)",
                left: "628px",
                transform: "rotate(45deg)",
                fontWeight: "700",
                background: "black"
              }}
            >
              &nbsp;research&nbsp;
            </p>
            <p
              style={{
                top: "calc(47vh - 368px + 574px)",
                left: "678px",
                transform: "rotate(-45deg)",
                background: "black"
              }}
            >
              &nbsp;data&nbsp;
            </p>
            <p
              style={{
                top: "calc(47vh - 368px + 155px)",
                left: "-2px",
                transform: "rotate(-45deg)",
                background: "black"
              }}
            >
              &nbsp;prototyping&nbsp;
            </p>
            <p
              style={{
                top: "calc(47vh - 368px + 538px)",
                left: "294px",
                transform: "rotate(-45deg)",
                background: "black"
              }}
            >
              &nbsp;product&nbsp;
            </p>
            <p
              style={{
                top: "calc(47vh - 368px + 432px)",
                left: "390px",
                transform: "rotate(-45deg)",
                background: "black"
              }}
            >
              &nbsp;interaction&nbsp;
            </p>
          </div>
          <svg height="604px" width="909px" transform="scale(.8)">
            <ellipse
              cx="302px"
              cy="302px"
              rx="300px"
              ry="300px"
              stroke="white"
              strokeWidth="2"
              fill="none"
              key="design"
            />
            <ellipse
              cx="677px"
              cy="372px"
              rx="230px"
              ry="230px"
              stroke="white"
              strokeWidth="2"
              fill="none"
              key="research"
            />
            <ellipse
              cx="827px"
              cy="522px"
              rx="80px"
              ry="80px"
              stroke="grey"
              strokeWidth=".8"
              fill="none"
              key="data"
            />
            <ellipse
              cx="172px"
              cy="172px"
              rx="170px"
              ry="170px"
              stroke="grey"
              strokeWidth=".8"
              fill="none"
              key="prototyping"
            />
            <ellipse
              cx="233px"
              cy="371px"
              rx="145px"
              ry="245px"
              transform="rotate(-45, 231, 369)"
              stroke="grey"
              strokeWidth=".8"
              fill="none"
              key="product"
            />
            <ellipse
              cx="371px"
              cy="233px"
              rx="145px"
              ry="245px"
              transform="rotate(-45, 369, 231)"
              stroke="grey"
              strokeWidth=".8"
              fill="none"
              key="interaction"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Home;
