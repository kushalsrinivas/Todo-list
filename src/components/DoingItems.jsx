import React from "react";


function DoingItems(props) {
    return(
        <div className="Items" onClick={
            ()=>{
                props.deleteDI(props.id)
            }
        }>
            <li>{props.value}</li>
        </div>
    )
}
export default DoingItems