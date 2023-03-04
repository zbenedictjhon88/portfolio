import React from "react";
import { Element } from "react-scroll";


import HeaderTitle from "../Parts/HeaderTitle";
import { getProjects } from "../data/data";
import PCard from "../Parts/PCard";

class Project extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Element name="project" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <HeaderTitle no="03." text="Some things I've Built and some projects I've been part of the team" />
                            </div>
                            {getProjects.map((data, i) => {
                                console.log(data);
                                return (
                                    <>
                                        <PCard
                                            isOdd={data.odd}
                                            title={data.title}
                                            description={data.description}
                                            stacks={data.stack}
                                            github={data.github}
                                            site={data.site}
                                            img={data.img}
                                        />
                                    </>
                                );
                                // return(
                                //     <PCard />
                                // );
                            })}
                        </div>
                    </div>
                </Element>
            </React.Fragment>
        );
    }
}

export default Project;