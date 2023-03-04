import React from "react";
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

function SocialMedia(props) {
    return (
        <React.Fragment>
            <ul className="social-ul">
                <li className="social-li">
                    <a href="https://www.linkedin.com/in/zbenedictjhon97/" target="_blank">
                        <AiOutlineLinkedin className="social-icon" />
                    </a>
                </li>
                <li className="social-li">
                    <a href="https://github.com/zbenedictjhon88/" target="_blank">
                        <AiOutlineGithub className="social-icon" />
                    </a>
                </li>
                <li className="social-li">
                    <a href="https://www.facebook.com/zack.santos.3110/" target="_blank">
                        <AiOutlineFacebook className="social-icon" />
                    </a>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default SocialMedia;