import React from "react";
import "./style.css";

function Bookmark(props) {
    return (
        <button className="BookmarkBtn" {...props}>
            <i class="fa fa-bookmark"></i>
        </button>
    );
}

export default Bookmark;