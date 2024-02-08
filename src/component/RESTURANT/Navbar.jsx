// import React from 'react';
// import React, { useState } from "react";

function Navbar({showAll,showFood}) {


  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
        <button className="btn-group__item" onClick={() => showAll("")}>
            {" "}
            All
          </button>
            
            
         
           <button
            className="btn-group__item"
            onClick={() => showFood("breakfast")}
          >
            {" "}
            Breakfast
          </button>
          <button className="btn-group__item" onClick={() => showFood("lunch")}>
            {" "}
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => showFood("evening")}
          >
            {" "}
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => showFood("dinner")}
          >
            {" "}
            Dinner
          </button> 


     
        </div>
      </nav>
    </>
  )
}

export default Navbar

