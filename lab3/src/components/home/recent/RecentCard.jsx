import React, { useState } from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  const [bed, setBed]=useState("");
  const [des, setDes]=useState("");
  const [lo, setLo]=useState("");
  return (
    <><section className='hero'>
      <div className='container'>
      <form className='flex'>
        <div className='box'>
          <span>Miasto/Ulica</span>
          <input type='text' placeholder='Lokacja' onChange={(event)=>{setLo(event.target.value);}}/>
        </div>
        <div className='box'>
          <span>Sypialnie</span>
          <input type='text' placeholder='Ilość sypialnii' onChange={(event)=>{setBed(event.target.value);}}/>
        </div>
        <div className='box'>
          <span>Opis</span>
          <input type='text' placeholder='Opis' onChange={(event)=>{setDes(event.target.value);}}/>
        </div>
        <button type="button" className='btn1'>
          Cena
          <i className='fa fa-sort'></i>
        </button>
      </form>
      </div>
    </section>
      <div className='content grid3 mtop'>
        {list.filter((val)=> {
          if(lo == "")
          {
            return val
          }
          else if(val.location.toLowerCase().includes(lo.toLowerCase()))
          { 
            return val
          }
        }).filter((val)=> {
          if(bed == "")
          {
            return val
          }
          else if(val.bedroom.includes(bed))
          { 
            return val
          }
        }).filter((val)=> {
          if(des == "")
          {
            return val
          }
          else if(val.desc.toLowerCase().includes(des.toLowerCase()))
          { 
            return val
          }
        }).map((val, index) => {
          const { cover, location, city, bedroom, price, desc} = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text flex'>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
                <p>
                  Sypialnie: {bedroom}
                </p>
                <p>{desc}</p>
              </div>
              <div className='button flex'>
                <span>{price}</span>
                <span>{city}</span>
                <div>
                  <button className='btn2'>Book Metting</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard