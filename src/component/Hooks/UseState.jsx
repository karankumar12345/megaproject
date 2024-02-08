import React, { useState } from 'react'
import "./style.css"


function UseState() {
    let [count, setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
       if(count>0){
        setCount(count-1)
       }
       else{
        setCount(0)
       }
    }
  return (
    <>
    <div className="centre_div">
        <p>{count}</p>
        <div className="button2" onClick={increment}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INER
        </div>
        <div className="button2" onClick={decrement}>
        <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
    </div>
    </>
  )
}

export default UseState
