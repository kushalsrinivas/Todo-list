import React from "react";
import reactDom from "react-dom";


function InputArea(props) {
    return(
        <>
        <div className="Input-box">

        <div className="InputArea">
         <input 
        placeHolder=""
        value ={props.Text}
        onChange = {props.HandleChange}
    />
    <button className="InputBtn"
    onClick = {props.addItem}
    >Add</button>   
    </div>
        </div>
        </>
    )
}

export default InputArea;