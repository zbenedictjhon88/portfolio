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
                                    Hello, my name is John Benedict Santos, and I enjoy creating things live on the Internet.
                                    My interest in web development started back in 2017 when I decided to create a web design using HTML and CSS.
                                    Through these experiences, I have developed a strong eagerness to learn more about technology.
                                </p>
                                <p>
                                    Fast-forward to today, I am currently working with an IT company and have gained a
                                    lot of experience in various technologies.
                                </p>
                                <p>
                                    Additionally, I recently launched a streaming website where anyone can watch dramas,
                                    TV shows, and movies without any cost.
                                </p>
                                <p>
                                    Here are a few technologies I have been working on and studying recently:
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>Codeignither/Yii/PHP</li>
                                            <li>React JS/Javascript/Jquery</li>
                                            <li>Firebase</li>
                                            <li>MySQL</li>
                                            <li>Git/Bit</li>
                                            <li>HTML/HTML5</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>Rest API</li>
                                            <li>Django/Python</li>
                                            <li>Flutter</li>
                                            <li>JSON</li>
                                            <li>CSS/CSS3</li>
                                            <li>Google & Facebook APIs</li>
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