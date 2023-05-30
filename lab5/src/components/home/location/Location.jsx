import React from "react"
import Heading from "../../common/Heading"
import "./style.css"
import { useEffect } from "react"
import axios from "axios"
import { useState } from 'react'

const Location = () => {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    const promise = axios.get("/json/Location.json");

    promise.then(response => {
      setLocation(response.data);
    });
  }, []);
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Dostępne lokacje'/>

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
