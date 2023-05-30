import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const RecentCard = () => {
  const [list, setRentalList] = useState([]);
  useEffect(() => {
    const promise = axios.get("/json/Data.json");

    promise.then(response => {
        setRentalList(response.data);
    });
  }, []);
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
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text flex'>
                <p>
                  <i className='fa fa-location-dot'></i> {val.location}
                </p>
                <p>
                  Sypialnie: {val.bedroom}
                </p>
                <p>{val.desc}</p>
              </div>
              <div className='button flex'>
                <span>{val.price}</span>
                <span>{val.city}</span>
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