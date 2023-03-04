function HeaderTitle(props) {
    return(
        <div className="header-title">
            <div className="header-no">{props.no}</div>
            <div className="header-text">{props.text}</div>
            <div className="header-line"></div>
        </div>
    );
}

export default HeaderTitle;