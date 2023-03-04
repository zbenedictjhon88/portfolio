import { Link } from "react-scroll";
import Menu from "../Parts/Menu";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-xl sticky-top">
            <div className="container">

                <Link className='navbar-brand' to='/'>
                    {/* <img src={logo} height={50} /> */}
                    BEN
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Menu to="about" name="01. About" />
                        </li>
                        <li className="nav-item">
                            <Menu to="experience" name="02. Experience" />
                        </li>
                        <li className="nav-item">
                            <Menu to="project" name="03. Project" />
                        </li>
                        <li className="nav-item">
                            <Menu to="contact" name="04. Contact" />
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a href="mailto:zbenedictjhon97@gmail.com" class="btn btn-primary">
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;