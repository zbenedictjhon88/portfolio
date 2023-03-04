import React from "react";
import { Element } from "react-scroll";
import HeaderTitle from "../Parts/HeaderTitle";

import hero from "../assets/img/hero.jpg";

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Element name="about" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <HeaderTitle no="01." text="About me" />
                            </div>
                            <div className="col-lg-6">
                                <p>
                                    Hello, my name is John and I enjoy creating things live on Internet.
                                    My Interest in web development started in 2017 when I decided to create a UI design
                                    using HTML and CSS and through these, I am eager to learn more about technology.
                                </p>
                                <p>
                                    Fast-forward to today I'm currently working with an IT Company with a lot of experience in another technology.
                                </p>
                                <p>
                                    And also recently I launched a streaming website where anyone can watch drama, tv shows, and movies without any cost.
                                </p>
                                <p>
                                    Here are a few technologies I’ve been working and studying with recently:
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>Codeignither</li>
                                            <li>React JS</li>
                                            <li>Firebase</li>
                                            <li>MySQL</li>
                                            <li>Git</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>Rest API/JSON</li>
                                            <li>Django/Python</li>
                                            <li>Flutter v3</li>
                                            <li>Yii 1.1</li>
                                            <li>Google Analytics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div className="hero">
                                    <img src={hero} className="hero-img" />
                                </div>
                                <div className="hero-pattern"></div>
                            </div>
                        </div>
                    </div>
                </Element>
            </React.Fragment>
        );
    }
}

export default About;