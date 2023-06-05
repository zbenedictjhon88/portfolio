import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";
import { AlignRightOutlined, MenuFoldOutlined } from '@ant-design/icons';
import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import NavBar from './layouts/Navbar';
import Header from "./layouts/Header";

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import SocialMedia from "./Parts/SocialMedia";
import { Button, Layout } from "antd";


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout>

          <NavBar />

          <Layout.Content className="content">
            <Home />
            <About />
            <Experience />
            <Project />
            <Contact />
          </Layout.Content>
        </Layout>
      </React.Fragment>
    )
  }
};

export default App;
