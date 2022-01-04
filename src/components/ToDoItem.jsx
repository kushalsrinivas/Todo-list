import React from "react";

function ToDoItem(props)
{
    return(

        <div className="Items" onClick={
            ()=>{
        props.deleteItem(props.id)
            }
    }>

    <li >{props.value}</li>
    </div>
        )
}

export default ToDoItem;