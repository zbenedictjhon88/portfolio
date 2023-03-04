function Tab(props) {
    return (
        <button
            className={'nav-link ' + props.status}
            id={props.id}
            data-bs-toggle="tab"
            data-bs-target={'#' + props.tabName}
            type="button"
            role="tab"
            aria-controls={props.tabName}
            aria-selected="true"
        >
            {props.name}
        </button>
    );
}

export default Tab;