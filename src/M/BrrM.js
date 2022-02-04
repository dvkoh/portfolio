import LeftHead from "../LeftHead";
import MidHeadProjects from "../MidHeadProjects";
import MidHeadPublications from "../MidHeadPublications";
import MidHeadMe from "../MidHeadMe";

import MeM from "./MeM";
import ThumbnailRowM from "./ThumbnailRowM";
import ThumbnailTextforPublicationsM from "./ThumbnailTextforPublicationsM";

import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FootM from "./FootM";

import ProjectSample from "../pages/ProjectSample";
import PublicationSample from "../pages/PublicationSample";

class BrrM extends Component {
  constructor({ data_cms }) {
    super();
    this.state = {
      show: "all",
      mode: "projects",
      top: true
    };
  }

  onShowJustHome = (event) => {
    this.setState({ show: "justhome" });
  };
  onShowAll = (event) => {
    this.setState({ show: "all" });
  };
  onModeProjects = (event) => {
    this.setState({ mode: "projects" });
    this.onShowAll(event);
  };
  onModePublications = (event) => {
    this.setState({ mode: "publications" });
    this.onShowAll(event);
  };
  onModeMe = (event) => {
    this.setState({ mode: "me" });
    this.onShowAll(event);
  };
  addDash = (sth) => {
    return "/" + sth;
  };
  render() {
    var hold1 = 0;
    var hold2 = 0;
    const tempStyle = {
      textDecoration: "none"
    };
    return (
      <div>
        <Router>
          {/* head */}
          <div className="head">
            <div onClick={this.onShowAll} className="left-headM">
              <Link to="/">
                <LeftHead />
              </Link>
            </div>
            <div className="mid-headM">
              <Link to="/">
                <div onClick={this.onModeProjects}>
                  <MidHeadProjects />
                </div>
              </Link>{" "}
              <br />
              <Link to="/">
                <div onClick={this.onModePublications}>
                  <MidHeadPublications />
                </div>
              </Link>
              <br />
              <Link to="/">
                <div onClick={this.onModeMe}>
                  <MidHeadMe />
                </div>
              </Link>
            </div>
            <div className="right-headM">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dvkoh/"
              >
                Linkedin &#x2197;
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/dvkoh/?hl=ko"
              >
                Instagram &#x2197;
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dvkoh.github.io/archive/"
              >
                Archive &#x2197;
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dvkoh.github.io/booksbooksbooks"
              >
                Reading List &#x2197;
              </a>
            </div>
          </div>
          <div class="arrowM">&#x2193;</div>
          {/* 


        */}
          {/* me */}
          <div className={this.state.mode === "me" ? "thumbnailM" : " none"}>
            {this.props.data_cms.map((obj, i) => {
              switch (obj.category) {
                case "me":
                  return <MeM context={obj.context} linkUrl={obj.linkUrl} />;
                default:
                  break;
              }
            })}
          </div>
          {/* projects */}
          <div
            className={this.state.mode === "projects" ? "thumbnailM" : " none"}
          >
            {/*       row */}
            <div>
              {this.props.data_cms.map((obj, i) => {
                switch (obj.category) {
                  case "project":
                    return (
                      <p
                        className={this.state.show === "justhome" ? "none" : ""}
                      >
                        <Link
                          style={tempStyle}
                          to={this.addDash(obj.title)}
                          onClick={this.onShowJustHome}
                        >
                          <ThumbnailRowM
                            imgUrl={obj.imgUrl}
                            linkUrl={obj.linkUrl}
                            title={obj.title}
                            kw={obj.kw}
                            context={obj.context}
                            year={obj.year}
                            month={obj.month}
                            id={obj.categoryid}
                          />
                        </Link>
                      </p>
                    );
                  default:
                    break;
                }
              })}
              <FootM />
            </div>
          </div>
          {/* publications */}
          <div
            className={
              this.state.mode === "publications" ? "thumbnail" : " none"
            }
          >
            <div>
              {this.props.data_cms.map((obj, i) => {
                switch (obj.category) {
                  case "publication":
                    return (
                      <p
                        className={this.state.show === "justhome" ? "none" : ""}
                        onClick={this.onShowJustHome}
                      >
                        <Link style={tempStyle} to={this.addDash(obj.title)}>
                          <ThumbnailTextforPublicationsM
                            title={obj.title}
                            kw={obj.kw}
                            context={obj.context}
                            at={obj.at}
                          />
                        </Link>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={obj.linkUrl}
                          className="link-3"
                        >
                          {obj.linkUrl === "n/a" ? "" : "Link ↗"}
                        </a>
                      </p>
                    );
                  default:
                    break;
                }
              })}
              <FootM />
            </div>
          </div>
          {/* 


        */}
          {/* new page directories*/}
          <Routes>
            <Route exact path="/">
              {this.props.data_cms.map((obj, i) => {
                switch (obj.category) {
                  case "me_short":
                    return <div />;
                  default:
                    break;
                }
              })}
            </Route>

            {/* projects  */}
            {this.props.data_cms.map((obj, i) => {
              switch (obj.category) {
                case "project":
                  return (
                    <Route path={this.addDash(obj.title)}>
                      <ProjectSample />
                    </Route>
                  );
                default:
                  break;
              }
            })}

            {/* publications */}
            {this.props.data_cms.map((obj, i) => {
              switch (obj.category) {
                case "publication":
                  return (
                    <Route path={this.addDash(obj.title)}>
                      <PublicationSample />
                    </Route>
                  );
                default:
                  break;
              }
            })}
          </Routes>
        </Router>
      </div>
    );
  }
}

export default BrrM;
