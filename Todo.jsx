//! Mini project

import React from 'react'
import { useState } from 'react'
import todo from "../TO-DO App/todo.jpg"

const Todo = () => {

    // inputData state variable store only one value at a time
    let[inputData,setInputData]=useState("")

    // items state variable can hold multiple datas(All the list items that user is going to enter one after another)
    let [items,setItems]=useState([])

    // editItems index state variable is used to hold the inndex value of that item which we want to modify and it can hold only one value at a time

    let [editIndex,seteditIndex]=useState(null)


    let handleSubmit=(e)=>{
        e.preventDefault();
    }


    let changeHandle=(e)=>{
        setInputData(e.target.value)
    }
    let addItems=()=>{
        if(inputData===""){
            alert("enter the some items")
        }
        // Update the input field
        else if(editIndex!==null){
            items[editIndex]=inputData
            seteditIndex(null)
            setInputData("")
        }
        else{
            // ...items(spread opertor is used here for keep track of previous value of an array)
            setItems([...items,inputData])
            setInputData("")
    }
 } 
 let ClearAll=()=>{
    setItems([])
 }
 let deleteItems=(id)=>{
    console.log(id)
    let updatedItems=items.filter((val,index)=>{
    return id!==index
    })
    setItems(updatedItems)
 }
 let editItems=(id)=>{
    setInputData(items[id])
    seteditIndex(id)

 }
  return (
    <>
    <section>
        <aside className='forAside'>
        <legend className='ForHeading'>TO-DO APP</legend>
        <img src={todo} style={{borderRadius:"12px"}} alt="" height="200px" width="250px"/>
        </aside>
        <form action="" onSubmit={handleSubmit} className="forForm">
            <input type="text" placeholder='enter the items✍️✍️' value={inputData} onChange={changeHandle} />
            <button onClick={addItems}>Add ➕</button>
        </form>
        <article className='forArticle'>
            {items.map((value,index)=>{
                return (
                    // key props are used here to uniquely identify the array items
                    <div key={index}>
                <span className='value' >{value}</span>
                <button id='delete' onClick={()=>deleteItems(index)}>DELETE</button>
                <button id='update' onClick={()=>editItems(index)}>UPDATE</button>
            </div>
                )
            })}
            
        </article>
        <footer className='forFooter'>
            <button onClick={ClearAll}>Clear All❌</button>
        </footer>
    </section>
    </>
  )
}

export default Todo