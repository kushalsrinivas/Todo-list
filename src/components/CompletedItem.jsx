import React from "react";


function CompletedItem(props) {
    return(
        <div className="Items" onClick={()=>{
            props.deleteItem(props.id);
        }}>
            <li>{props.value}</li>
        </div>
    )
}

export default CompletedItem;