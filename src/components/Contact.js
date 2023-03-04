import React from "react";
import { Element } from "react-scroll";
import HeaderTitle from "../Parts/HeaderTitle";

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Element name="contact" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 text-center" style={{ margin: 'auto' }}>
                                <h1>Get In Touch</h1>
                                <p>Any type of questions or discussion let's talk. My inbox is always open. Whether you have a question or just want to say hi.</p>
                                <a href="mailto:zbenedictjhon97@gmail.com" className="btn btn-primary">
                                    Say Hello
                                </a>
                            </div>
                        </div>
                    </div>
                </Element>
            </React.Fragment>
        );
    }
}

export default Contact;