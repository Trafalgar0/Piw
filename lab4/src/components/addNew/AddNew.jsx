import React from "react"
import "./addNew.css"

const AddNew = () => {
  return (
    <>
      <section className='addNew mb'>
        <div className='container'>
          <form className='shadow'>
            <div>
              <input type='text' placeholder='Adres' />
              <input type='text' placeholder='Liczba Sypialni' />
              <input type='text' placeholder='Cena' />
            </div>
            <textarea cols='30' rows='10' placeholder="Opis"></textarea>
            <button type = 'button'>Dodaj</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default AddNew