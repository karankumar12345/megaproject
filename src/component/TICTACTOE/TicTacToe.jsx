import React, { useRef, useState } from 'react'
import './style.css'
let data=["","","","","","","","",""]
function TicTacToe() {
    
let [count,setCount]=useState(0)

let [lock,setLock]=useState(false)
let titleRef=useRef(null)
const toggle=(e,num)=>{
    if(lock){
          return false;
          
    }
    if(count%2===0){
        e.target.innerHTML="X"
        data[num]="X"
 
       
        setCount(++count)
        
    }
    else{
        e.target.innerHTML="0"
        data[num]="0"

      
          setCount(++count)
          
    }
 
    checkWin()
    
    

}
const checkWin=()=>{
    if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
  won(data[2])
    }
    else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
        won(data[6])
    }
    else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
        won(data[8])
    }
    else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
        won(data[7])
    }

    else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
        won(data[5])
    }
    else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
        won(data[8])
    }
    else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
        won(data[6])
    }
    else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
        won(data[8])
    }
    
    
}
const won=(winner)=>{
    setLock(true)
    if(winner==='X'){
        titleRef.current.innerHTML='Congratilation : X  '
    }
    else{
        titleRef.current.innerHTML='Congratilation : 0   '
    }
}

const resetGame = () => {
    setCount(0);
    setLock(false);
    data.fill(""); // Reset the data array
    // Also, reset the innerHTML of all boxes if you want to clear the X and 0 on the UI
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => {
        box.innerHTML = "";
    });
    titleRef.current.innerHTML = 'Tic Tac Toe Game In <span>React</span>';
};
  

  return (
    <>
<div className="container">
    <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
    <div className="board">
<div className="row1">
    <div className="boxes"  onClick={(e)=>{toggle(e,0)}}></div>
    <div className="boxes"  onClick={(e)=>{toggle(e,1)}}></div>
    <div className="boxes"  onClick={(e)=>{toggle(e,2)}}></div>
</div>
<div className="row2">
    <div className="boxes"  onClick={(e)=>{toggle(e,3)}}></div>
    <div className="boxes"  onClick={(e)=>{toggle(e,4)}}></div>
    <div className="boxes"  onClick={(e)=>{toggle(e,5)}}></div>
</div>
<div className="row3">
    <div className="boxes"  onClick={(e)=>{toggle(e,6)}}></div>
    <div className="boxes"  onClick={(e)=>{toggle(e,7)}}></div>
    <div className="boxes"  onClick={(e)=>{toggle(e,8)}}></div>

</div>
    </div>
    <div className='reset' onClick={resetGame}>
  Reset
</div>

</div>
    </>
  )



}

export default TicTacToe
                            