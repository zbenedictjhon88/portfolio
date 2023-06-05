
import React from "react";
import { Element } from "react-scroll";
import HeaderTitle from "../Parts/HeaderTitle";
import Tab from "../Parts/Tab";
import { Radio, Space, Tabs } from 'antd';

const items = [
    {
        key: '1',
        label: 'TSTC',
        children: (
            <>
                <div className="job-experience">
                    <h5>Junior Programmer 2 </h5>
                    <small>Tranzend Solution and Trading Corp. (Aug. 2021 - Present)</small>
                    <div className="achivements">
                        <p>
                            Wrote server-side and client-side code for different projects using PHP, HTML,
                            CSS and JavaScript, specifically with CodeIgniter/Laravel frameworks and ReactJS library.
                        </p>
                        <p>Developed back-end components to connect applications with web services.</p>
                        <p>Performed troubleshooting of technical issues within production environment.</p>
                        <p>Regularly updated knowledge of latest industry trends in web development and related technologies.</p>
                        <p>Worked closely with Project Managers and other developers to define parameters and plan detailed specifications with clear project deliverables and timelines to meet strict deadlines.</p>
                        <p>Developed in-house applications designed for company needs.</p>
                    </div>
                </div>
                <div className="job-experience">
                    <h5>Junior Programmer </h5>
                    <small>Tranzend Solution and Trading Corp. (Aug. 2018 - Aug. 2021)</small>
                    <div className="achivements">
                        <p>
                            Worked as part of software development teams in the design, development,
                            and support of both new and existing software products and systems; reporting status,
                            monitoring issues/problems and recommending action plans.
                        </p>
                        <p>Configured Google analytics module for tracking the visitors for the website.</p>
                        <p>Used Ajax for every page for dynamically displaying the data without a page refresh.</p>
                        <p>Developed and maintained functions, procedures, triggers, indexes using MySQL database programming language.</p>
                        <p>Identifying and solving issues caused by plugins or feeds under PHP, MySQL, HTML, CSS, Javascript and Jquery technology.</p>
                    </div>
                </div>
            </>
        ),
    },
];

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
                            <div className="col-lg-12" style={{ margin: 'auto' }}>
                                <Tabs
                                    tabPosition='left'
                                    items={items}
                                />
                            </div>
                        </div>
                    </div>
                </Element>
            </React.Fragment>
        );
    }
}

export default Experience;