import React, { useState } from "react";
import "./style.css";
import Menu from "./Menu";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
// import Navbar from "./Navbar";
// const uniqueList = [
//   ...new Set(
//     Menu.map((curElem) => {
//       return curElem.category;
//     })
//   ),

// ];
// console.log(uniqueList);

 function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const showFood = (category) => {
    const updatedata = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedata);
  };

  const showAll=(category)=>{
  setMenuData(Menu)
}
  return (
    <>

    <Navbar     showFood={showFood} menuData={menuData} showAll={showAll} ></Navbar>
      <MenuCard menuData={menuData}></MenuCard>
    </>
  );
}

export default Restaurant;
