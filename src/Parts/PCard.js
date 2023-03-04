import React from "react";
import { render } from "react-dom";
import { AiOutlineGitlab, AiOutlineLineChart } from "react-icons/ai";
import { Link } from "react-router-dom";

function PCard(props) {
    if (props.isOdd) {
        return (
            <React.Fragment>
                <div className="col-lg-12">
                    <div className="pcard">
                        <div className="row">
                            <div className="col-lg-6 pcard-content">
                                <div className="pcard-title">{props.title}</div>
                                <div className="pcard-body">
                                    {props.description}
                                </div>
                                <div className="pcard-stack">
                                    {props.stacks.map((data, i) => {
                                        return (<span key={i}>{data}</span>);
                                    })}
                                </div>
                                <div className="pcard-exten">
                                    <a href={props.github} target="_blank">
                                        <AiOutlineGitlab className="pcard-icon" />
                                    </a>
                                    <a href={props.site} target="_blank">
                                        <AiOutlineLineChart className="pcard-icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 pcard-cover" style={{ backgroundImage: 'url(' + props.img + ')' }}></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className="col-lg-12">
                    <div className="pcard">
                        <div className="row">
                            <div className="col-lg-6 pcard-cover" style={{ backgroundImage: 'url(' + props.img + ')' }}></div>
                            <div className="col-lg-6 pcard-content">
                                <div className="pcard-title">{props.title}</div>
                                <div className="pcard-body">
                                    {props.description}
                                </div>
                                <div className="pcard-stack">
                                    {props.stacks.map((data, i) => {
                                        return (<span key={i}>{data}</span>);
                                    })}
                                </div>
                                <div className="pcard-exten">
                                    <a href={props.github} target="_blank">
                                        <AiOutlineGitlab className="pcard-icon" />
                                    </a>
                                    <a href={props.site} target="_blank">
                                        <AiOutlineLineChart className="pcard-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }


}

export default PCard;