import { Link } from "react-scroll";
import Menu from "../Parts/Menu";
import { AlignRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Drawer } from "antd";

function NavBar() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-xl sticky-top">
                <div className="container">

                    <Link className='navbar-brand' to='/'>
                        BEN
                    </Link>

                    <div className="justify-content-end">
                        <div className="d-flex">
                            <AlignRightOutlined onClick={showDrawer} className="btn-icon" />
                        </div>
                    </div>
                </div>
            </nav>

            <Drawer
                placement="right"
                onClose={onClose}
                open={open}
                className="drawer"
            >
                <p><Menu to="about" name="01. About" /></p>
                <p><Menu to="experience" name="02. Experience" /></p>
                <p><Menu to="project" name="03. Project" /></p>
                <p><Menu to="contact" name="04. Contact" /></p>
            </Drawer>
        </React.Fragment>
    );
}

export default NavBar;