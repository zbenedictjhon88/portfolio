import React from "react";
import { Link } from "react-scroll";

function Menu(props) {
    return (
        <React.Fragment>
            <Link
                className='nav-link'
                to={props.to}
                spy={true}
                smooth={true}
                duration={1000}
            >
                {props.name}
            </Link>
        </React.Fragment>
    );
}
export default Menu;