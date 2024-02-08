import React from 'react'
import "./style.css"
import {useReducer } from 'react'
 const reducer=(state,action)=>{
    if(action.type==="INCR"){
        state=state+1
    }
    if(action.type==="DECR"){
       if(state>0){
        state=state-1
       }
       else{
         return state
       }
    }
    return state
 }
function UseReducer() {
   const intial=10
  const [state,Dispatch]=useReducer(reducer,intial)


  return (
    <>
    <div className="centre_div">
        <p>{state}</p>
        <div className="button2" onClick={()=>Dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INER
        </div>
        <div className="button2" onClick={()=>Dispatch({type:"DECR"})}>
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

export default UseReducer
