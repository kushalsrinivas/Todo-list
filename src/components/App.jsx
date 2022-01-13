import React from "react";
import reactDom from "react-dom";
import TodoItem from "./ToDoItem"
import Header from "./Header";
import InputArea from "./InputArea";
import DoingItems from "./DoingItems";
import CompeletedItem from "./CompletedItem";
import {DeleteOutlined } from "@ant-design/icons"

function App(params) {
    const [Text, SetText] = React.useState("");
    const [Item, SetItem] = React.useState([]);
    const [DoingItem, SetDI] = React.useState([]);
    const [CompletedItems, SetCI] = React.useState([]);
   

    function HandleChange(event){
        const {value} = event.target;
        SetText(value);
    }
     
    function addItem(event) 
    {
        if(event.key === "Enter" && event.target.value.length > 0){

            SetText("");
    
            SetItem((prev)=>{
                return [...prev, Text];
            })
        }       

    }
      function deleteItem(id) {
        SetItem((prev)=>{
            return prev.filter((value,index)=>{
                if (index ===id) {
                    AddDI(value)
                }
                return index !==id
            })
        })
    }
    function AddDn(value) {
        SetCI((prev)=>{
            return [...prev, value]
        })
        console.log(CompletedItems);
    }

    function AddDI(value){
        SetDI((prev)=>{
            return [...prev,value];
        })
    }
  



    function deleteDI(id) {
        SetDI((prev)=>{
            return prev.filter((value,index)=>{
                if (index ===id) {
                    AddDn(value);

                }
                return index !==id
            })
        })
    }
    function DeleteC(id) {
        SetCI((prev)=>{
            return prev.filter((value,index)=>{
              
                return index !==id
            })
        })
    }

function ClearItems(event) {
    SetCI([]);
}
return (
<>
<Header></Header>
    <div className="box">

    <div className= "container">
<div className="container-header">

    <InputArea
    Text = {Text}
    HandleChange ={HandleChange}
    addItem ={addItem}
    />
</div>
<div className="list-area">

    <ul>

            {
                Item.map((value,index)=>{
                    return(
                        <TodoItem value = {value} key={index} id={index} deleteItem={deleteItem} />
                    )
                })
            }
    </ul>
</div>
        </div>   
        <div className="container">
            <div className="container-header">
                <header>In-process</header>
            </div>
            <div>

            {
                DoingItem.map((value,index)=>{
                    return(
                            <DoingItems key= {index}id = {index}value={value} deleteDI= {deleteDI}/>
                    )
                })
            }
            </div> 
        </div>
        <div class="container Done">
            <div className="container-header">
                <header>Completed</header>
                <button className="InputBtn" onClick={ClearItems}><DeleteOutlined/> </button>
            </div>
                <div className="list-area">

                {
                    CompletedItems.map((value,index)=>{
                        return(
                            <CompeletedItem key={index} value={value} id={index} deleteItem={DeleteC}/>
                        )
                    })
                }
                </div>
            </div> 

    </div>
</>
)
}


export default App;