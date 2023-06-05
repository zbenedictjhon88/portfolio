import React from "react";
import { Element } from "react-scroll";
import banner from "../assets/img/banner.png"

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Element name="home" className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="short-intro">
                                    <small>Hi, my name is</small>
                                    <h1>John Benedict Santos.</h1>
                                    <h6>I build things for the web & mobile.</h6>
                                    <p>
                                        I’m a software engineer specializing in web development since 2018.
                                    </p>
                                    <br />
                                    <a href="mailto:zbenedictjhon97@gmail.com" className="btn btn-primary mr-10">
                                        Hire Me
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Jd0tw5LDiN2yqfHsSTlOoog31texfLZj/view" className="btn btn-secondary">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
                <div className="container p-auto" hidden>
                    <div className="row">
                        <div className="col-lg-6">

                        </div>
                        <div className="col-lg-6">
                            <div className="short-intro">
                                <h1> About Me</h1>
                                <p>
                                    Don't stop when you're tired. < br />
                                    Stop when you're done.
                                </p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;