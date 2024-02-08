import React from 'react'
import "./style.css";
function MenuCard({menuData}) {
    // console.log(menuData)
  return (
    <>
    <section className='main-card--cointainer'>
    {
        menuData.map((curElement)=>{
            return(
                <>
  <div className='card-container' key={curElement.id}>
    <div className='card' >
        <div className='card-body'  >
          <span className="card-description subtle">
            <h2 className='card-title'>{curElement.name}</h2>
         {curElement.description}
          </span>
          <div className="card-read">Read</div>
        </div>
        <img src={curElement.image} alt="" />
      </div>
    </div>
                </>
            )
        })
    }
    </section>
   
    </>
  )
}

export default MenuCard
