import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search" type="text" />
            </div>
        

        </div>
    )
}

export default Widgets
