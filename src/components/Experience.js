
import React from "react";
import { Element } from "react-scroll";
import HeaderTitle from "../Parts/HeaderTitle";
import Tab from "../Parts/Tab";

class Experience extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Element name="experience" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <HeaderTitle no="02." text="Where I've worked" />
                            </div>
                            <div className="col-lg-8" style={{ margin: 'auto' }}>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <Tab status="active" id="tstc-tab" tabName="tab-tstc-panel" name="TSTC" />
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-tstc-panel" role="tabpanel" aria-labelledby="tstc-tab" tabindex="0">
                                        <h4>Junior Programmer 2 - TSTC</h4>
                                        <p>August 2018 - Present</p>
                                        <ul>
                                            <li>
                                                Worked with a team of one developer and a team lead to build a school management system, server monitoring, and  so on.
                                            </li>
                                            <li>
                                                Maintained and Enhanced existing system project.
                                            </li>
                                            <li>
                                                Applied APIs such as Google API, Facebook API, and Mapbox API.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
            </React.Fragment>
        );
    }
}

export default Experience;