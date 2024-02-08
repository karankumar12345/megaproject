import React, { useState } from 'react'
import './style.css'
function Todo() {
    const [inputdata,setInputdata]=useState("")
    const [item,setItem]=useState([])
    const addItem=()=>{
        if(!inputdata){
            alert('plz fill data')
        }
        else{
setItem([...item,inputdata])
        }
    }
  return (
<>
<div className="main-div">
    <div className='child-div'>
<figure>
    <img src="data:image/png;base64,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" alt="" />
    <figcaption>Add your list Here </figcaption>
    {/* <h2>Add your list Here</h2> */}
</figure>

<div className="addItems">
  <input type="text" placeholder='Add item'
  className='form-control'
  value={inputdata}
  onChange={(event)=>setInputdata(event.target.value)} />
<i className="fa-solid fa-plus add-btn" onClick={addItem}></i>
</div>
<div className='showItems'>
    <div className='eachItem'>
        <h3>Apple</h3>
        <div className='todo-btn'>
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash"></i>
        </div>
    </div>
</div>
<div className="showItems">
    <button className="btn effect04" data-sm-link-text="Remove all">
      <span>Check List</span>
    </button>
</div>
</div>
</div>
</>
  )
}

export default Todo
