import React from "react";


function CompletedItem(props) {
    return(
        <div className="Items">
            <li>{props.value}</li>
        </div>
    )
}

export default CompletedItem;