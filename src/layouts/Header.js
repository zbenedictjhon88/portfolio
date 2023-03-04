import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

import banner from "../assets/img/banner.png";

function Header(props) {

    const options = {
        //...
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.2
            },
            size: {
                value: { min: 1, max: 8 }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 5,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out"
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 4
                }
            }
        },
        // background: {
        //     color: {
        //         value: "#323647",
        //     },
        // },
    };

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <React.Fragment>
            <Particles options={options} init={particlesInit} />
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="short-intro">
                                <small>HELLO There!</small>
                                <h1>I'm John Benedict Santos</h1>
                                <h6>Software Engineer</h6>
                                <p>
                                    I'm not a great programmer; I'm just a good programmer with great habits.
                                </p>
                                <button className="btn btn-primary">
                                    Download My CV
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img src={banner} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;