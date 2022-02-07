import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home2 from "./Home2";
import Dots from "./Dots";
import Rects from "./Rects";

import ProjectSample from "./pages/ProjectSample";
import Me from "./Me";

import LeftHead from "./LeftHead";
import ViewMode from "./ViewMode";

import ThumbnailGalleryImg from "./ThumbnailGalleryImg";
import Waterfall from './Waterfall';
import ThumbnailList from "./ThumbnailList";
import ThumbnailListforPublications from "./ThumbnailListforPublications";

import Foot from "./Foot";

class Brr extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      show: "justhome",
      mode: "me",
      select: "all",
      display: "gallery",
      top: true,
      stick: false,
      scroll: 0,
      intervalId:0
    };
  }
  scrollupStep() {
    if (window.pageYOffset < document.documentElement.clientHeight + 80){
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 40);
  }
  scrollupToBanner() {
    if(window.pageYOffset > document.documentElement.clientHeight + 80){
      window.scroll(0, window.pageYOffset/40*40)
      let intervalId = setInterval(
        this.scrollupStep.bind(this),
        1
      );
      this.setState({ intervalId: intervalId });
    }
  }
  scrolldownStep() {
    //  언제 멈추냐
    if (window.pageYOffset >= document.documentElement.clientHeight - 40){
      clearInterval(this.state.intervalId);
    }
    // 이동 단위
    window.scroll(0, window.pageYOffset + 40);
  }
  scrolldownToBanner() {
    // 여기 범위일 때 작동
    if(window.pageYOffset < document.documentElement.clientHeight - 40){
      // 이동 단위 맞추기
      window.scroll(0, (window.pageYOffset+40)/40*40)
      let intervalId = setInterval( 
        this.scrolldownStep.bind(this),
        1
      );
      this.setState({ intervalId: intervalId });
    }
    if(window.pageYOffset > document.documentElement.clientHeight + 80){
      // 이동 단위 맞추기
      window.scroll(0, (window.pageYOffset+40)/40*40)
      let intervalId = setInterval( 
        this.scrollupStep.bind(this),
        1
      );
      this.setState({ intervalId: intervalId });
    }
  }
  // for sticky
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    var hh = window.innerHeight - 25;
    if (window.pageYOffset > hh) {
      return this.setState({ stick: true });
    } else this.setState({ stick: false });
   }
  // else
  inout = (event) => {
    this.setState({ in: !this.state.in });
  };
  onShowJustHome = (event) => {
    this.setState({ show: "justhome", mode: ''});
  };
  onShowAll = (event) => {
    this.setState({ show: "all"});
  };
  onSelectAll = (event) => {
    this.setState({ select: "all" });
    this.onShowAll(event);
  };
  onSelectSelect = (event) => {
    this.setState({ select: "select" });
    this.onShowAll(event);
  };
  onSelectDigital = (event) => {
    this.setState({ select: "digital" });
    this.onShowAll(event);
  };
  onSelectTangible = (event) => {
    this.setState({ select: "tangible" });
    this.onShowAll(event);
  };
  onModeProjects = (event) => {
    this.setState({ mode: "projects" });
    this.onShowAll(event);
    this.scrolldownToBanner();
  };
  onModePublications = (event) => {
    this.setState({ mode: "publications" });
    this.onShowAll(event);
    this.scrolldownToBanner();
  };
  onModeMe = (event) => {
    this.setState({ mode: "me" });
    this.onShowAll(event);
    this.scrolldownToBanner();
  };
  onDisplayGallery = (event) => {
    this.setState({
      display: "gallery"
    });
    this.scrollupToBanner();
  };
  onDisplayWaterfall = (event) => {
    this.setState({
      display: "waterfall"
    });
    this.scrollupToBanner();
  };
  onDisplayList = (event) => {
    this.setState({
      display: "list"
    });
    this.scrollupToBanner();
  };
  addDash = (sth) => {
    return "/" + sth;
  };

  render() {
    var hold1 = 0;
    var hold2 = 0;

    return (
      <div style={{zIndex:'10'}}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "calc(100vh - 25px)",
            background: "black",
            zIndex: '3'
          }}
        />
        {/* modebutton */}
        <div
          className={
            (this.state.mode === "projects") & (this.state.show === "all")
              ? ""
              : "none"
          }
        >
          <div className={this.state.stick ? "view stick2" : "view  nonstick2"}>
            <div
              style={{
                position: "absolute",
                zIndex: "-1",
                marginTop: "-10px",
                marginLeft: "-25px",
                backgroundColor: "rgba(255,255,255,1)",
                // boxShadow: '0px 10px 20px rgba(120,120,120,0.1)',
                width: "100vw",
                height: "55px"
              }}
            />
            <ViewMode
              display={this.state.display}
              select={this.state.select}
              sall={this.onSelectAll}
              ssel={this.onSelectSelect}
              sdig={this.onSelectDigital}
              stan={this.onSelectTangible}
              dgal={this.onDisplayGallery}
              dwat={this.onDisplayWaterfall}
              dlis={this.onDisplayList}
            />
          </div>
        </div>
        <div
          className={
            (this.state.mode === "publications") & (this.state.show === "all")
              ? ""
              : "none"
          }
        >
          <div className={this.state.stick ? "view stick2" : "view  nonstick2"}>
            <div
              style={{
                position: "absolute",
                zIndex: "-1",
                marginTop: "-10px",
                marginLeft: "-25px",
                backgroundColor: "rgba(255,255,255,1)",
                width: "100vw",
                height: "55px"
              }}
            />
          </div>
        </div>
        <Router>
          {/* ben */}
          <div className={this.state.show === 'page' ? 'none' : ''}>
            <Home2 cms={this.props.home_cms}/>
            <div>
              {this.props.home_cms.map((obj, i) => {
                switch (obj.category) {
                  case "project":
                    return (
                      <p key={"ben" + obj.id} style={{position:'absolute', top:'-20px', zIndex:'34'}}>
                        <Link
                          to={this.addDash(obj.title).replaceAll(' ','').replaceAll('\"','')}>
                          <div>
                            <Dots
                              x={obj.x}
                              y={obj.y}
                              title={obj.title}
                              year={obj.year}
                              key={"project" + obj.id}
                            />
                          </div>
                        </Link>
                      </p>
                    );
                  case "publication":
                    return (
                      <p key={"ben" + obj.id}>
                        <a                  
                          target="_blank"
                          rel="noopener noreferrer"
                          href={"https://www.naver.com"}
                        >
                          <div>
                            <Rects
                              x={obj.x}
                              y={obj.y}
                              title={obj.title}
                              year={obj.year}
                              key={"project" + obj.id}
                            />
                          </div>
                        </a>
                      </p>
                    );
                  default:
                    break;
                }
              })}
            </div>
          </div>
          {/* head */}
          <div className="head" style={{zIndex:'5'}}>
            <div onClick={this.onShowAll} className="left-head">
              <Link to="/">
                <LeftHead />
              </Link>
            </div>
          </div>
          <div style={{}}>
            {/* contenttoggle */}
            <p
              className={
                this.state.stick ? "mid-head stick" : "mid-head nonstick"
              }
              style={{cursor: 'default'}}
            >
              ↓ Content :
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                style={
                  this.state.mode === "projects"
                    ? { color: "rgb(255, 0, 150)", cursor: 'pointer'}
                    : { color: "grey", cursor: 'pointer' }
                }
                onClick={this.onModeProjects}
              >
                Projects
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                style={
                  this.state.mode === "publications"
                  ? { color: "rgb(255, 0, 150)", cursor: 'pointer' }
                  : { color: "grey", cursor: 'pointer' }
                }
                onClick={this.onModePublications}
              >
                Publications
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                style={
                  this.state.mode === "me"
                  ? { color: "rgb(255, 0, 150)", cursor: 'pointer' }
                  : { color: "grey", cursor: 'pointer' }
                }
                onClick={this.onModeMe}
              >
                Me
              </span>
            </p>
          </div>
          {/* 밑에 거시기 */}
          <div style={{position:'absolute', zIndex:'-2', marginTop: '120px'}}>
            {/* me */}
            <div className={this.state.mode === "me" ? "thumbnail" : " none"}>
              <div className='footbox'>
                <p style={{position:'absolute', bottom:'0', fontSize:'12px', color:'rgb(46, 46, 46)', opacity:'.5', marginBottom:'18px', marginLeft:'25px'}}>
                  &copy; Copyright 2021 Dong-yoon Koh
                </p>
              </div>
              {this.props.home_cms.map((obj, i) => {
                switch (obj.category) {
                  case "me":
                    return (
                      <Me
                        context1={obj.context}
                        context2={obj.kw}
                        linkUrl={obj.linkurl}
                        key={"me" + obj.id}
                      />
                    );
                  default:
                    break;
                }
              })}
              {/* <Foot/> */}
            </div>
            {/* projects */}
            <div
              className={this.state.mode === "projects" ? "thumbnail" : " none"}
            >
              {/*       gallery */}
              <div
                className={this.state.display === "gallery" ? "" : "none"}
                style={{ marginTop: "-55px" }}
              >
                {this.props.home_cms.map((obj, i) => {
                  switch (obj.category) {
                    case "project":
                      return (
                        <div
                          className={this.state.show === "justhome" ? "none" : ""}
                          key={"gallery" + obj.id}
                        >
                          <ThumbnailGalleryImg
                            imgUrl={obj.imgurl}
                            imgUrl2={obj.imgurl2}
                            imgUrl3={obj.imgurl3}
                            year={obj.year}
                            month={obj.month}
                            kw={obj.kw}
                            id={obj.categoryid}
                            title={obj.title}
                            context={obj.context}
                            key={"gallery" + obj.id}
                            ggo={
                              <Link
                                style={{
                                  color: "rgb(255, 0, 150)"
                                }}
                                to={this.addDash(obj.title).replaceAll(' ','').replaceAll('\"','')}
                              >
                                learn more → 
                              </Link>
                            }/>
                        </div>
                      );
                    default:
                      break;
                  }
                })}
                <Foot/>
              </div>
              {/*       waterfall */}
              <div
                className={this.state.display === "waterfall" ? "" : "none"}
              >
                <div style={{ marginTop: "-120px", position:'absolute', top: '100px'}}>
                  {this.props.home_cms.map((obj, i) => {
                    switch (obj.category) {
                      case "project":
                        return (
                          <div
                            className={this.state.show === "justhome" ? "none" : ""}
                            key={"wf" + obj.id}
                          >
                            <Link
                              to={this.addDash(obj.title).replaceAll(' ','').replaceAll('\"','')}
                            >
                              <div style={{}}>
                                {obj.categoryid % 3 === 1 ? 
                                  (<Waterfall
                                    imgUrl={obj.imgurl}
                                    title={obj.title}
                                    kw={obj.kw}
                                    year={obj.year}
                                    id={obj.categoryid}
                                    port={obj.port}
                                  />):(<div/>)
                                }
                              </div>
                            </Link>
                          </div>
                        );
                      default:
                        break;
                    }
                  })}
                  <Foot/>
                </div>
                <div style={{ marginTop: "-120px", position:'absolute', top: '100px', left: '29vw'}}>
                  {this.props.home_cms.map((obj, i) => {
                    switch (obj.category) {
                      case "project":
                        return (
                          <div
                            className={this.state.show === "justhome" ? "none" : ""}
                            key={"wf" + obj.id}
                          >
                            <Link
                              to={this.addDash(obj.title).replaceAll(' ','').replaceAll('\"','')}
                            >
                              <div style={{}}>
                                {obj.categoryid % 3 === 2 ? 
                                  (<Waterfall
                                    imgUrl={obj.imgurl}
                                    title={obj.title}
                                    kw={obj.kw}
                                    year={obj.year}
                                    id={obj.categoryid}
                                    port={obj.port}
                                  />):(<div/>)
                                }
                              </div>
                            </Link>
                          </div>
                        );
                      default:
                        break;
                    }
                  })}
                </div>
                <div style={{ marginTop: "-120px", position:'absolute', top: '100px', left: '58vw'}}>
                  {this.props.home_cms.map((obj, i) => {
                    switch (obj.category) {
                      case "project":
                        return (
                          <div
                            className={this.state.show === "justhome" ? "none" : ""}
                            key={"wf" + obj.id}
                          >
                            <Link
                              to={this.addDash(obj.title).replaceAll(' ','').replaceAll('\"','')}
                            >
                              <div style={{}}>
                                {obj.categoryid % 3 === 0 ? 
                                  (<Waterfall
                                    imgUrl={obj.imgurl}
                                    title={obj.title}
                                    kw={obj.kw}
                                    year={obj.year}
                                    id={obj.categoryid}
                                    port={obj.port}
                                  />):(<div/>)
                                }
                              </div>
                            </Link>
                          </div>
                        );
                      default:
                        break;
                    }
                  })}
                </div>
              </div>
              {/*       list */}
              <div
                className={this.state.display === "list" ? "" : "none"}
                style={{ marginTop: "-73px" }}
              >
                {this.props.home_cms.map((obj, i) => {
                  switch (obj.category) {
                    case "project":
                      hold1 = hold2;
                      hold2 = obj.year;
                      return (
                        <p
                          className={this.state.show === "justhome" ? "none" : ""}
                          key={"list" + obj.id}
                        >
                            <div>
                              <ThumbnailList
                                imgUrl={obj.imgurl}
                                imgUrl2={obj.imgurl2}
                                imgUrl3={obj.imgurl3}
                                title={obj.title}
                                kw={obj.kw}
                                context={obj.context}
                                year={obj.year}
                                id={obj.categoryid}
                                ggo={
                                <Link
                                  style={{
                                    color: "rgb(255, 0, 150)",
                                  }}
                                  to={this.addDash(obj.title).replaceAll(' ','').replaceAll('\"','')}
                                  // onClick={this.onShowJustHome}
                                >
                                  learn more →
                                </Link>
                            }/>
                            </div>
                        </p>
                      );
                    default:
                      break;
                  }
                })}
                <Foot/>
              </div>
            </div>
            {/* publications */}
            <div
              className={
                this.state.mode === "publications" ? "thumbnail" : " none"
            }>
              <div style={{ marginTop: "-73px" }}>
                {this.props.home_cms.map((obj, i) => {
                  switch (obj.category) {
                    case "publication":
                      hold1 = hold2;
                      hold2 = obj.year;
                      return (
                        <p
                          className={this.state.show === "justhome" ? "none" : ""}
                          key={"publist" + obj.id}
                        >
                          <ThumbnailListforPublications
                            title={obj.title}
                            kw={obj.kw}
                            year={obj.year}
                            month={obj.month}
                            context={obj.context}
                            jumpyear={hold1 === hold2}
                            at={obj.at}
                            ggo={
                              <a                  
                                target="_blank"
                                rel="noopener noreferrer"
                                href={"https://www.naver.com"}
                                style={{
                                  color: "rgb(255, 0, 150)"
                                }}
                              >
                                learn more ↗
                              </a>
                            }/>
                        </p>
                      );
                    default:
                      break;
                  }
                })}
                <Foot/>
              </div>
            </div>
          </div>
          


          {/* new page directories*/}
          <Routes>
            <Route exact path="/">
            </Route>
            {/* projects  */}
            {this.props.home_cms.map((obj, i) => {
              switch (obj.category) {
                case "project":
                  return (
                      <Route
                        path={this.addDash(obj.title).replaceAll(' ','').replaceAll('\"','')}
                        key={"route" + obj.id}
                        element={
                          <ProjectSample
                            page_cms={this.props.page_cms}
                            title={obj.title}
                        />}
                      />
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

export default Brr;
