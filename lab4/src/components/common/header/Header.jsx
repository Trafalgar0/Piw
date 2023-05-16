import React, { useState, useContext } from "react"
import "./header.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { UserContext } from "../../../UserContex"


const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [navList, setNavList] = useState(false)
  const [nav, setNav] = useState([]);
  useEffect(() => {
    const promise = axios.get("/json/Nav.json");

    promise.then(response => {
      setNav(response.data);
    });
  }, []);

  return (
    <>
      <header>
        <div className='container flex'>
          <div>
            <img src='./images/logo.png' alt='' />
          </div>
          {user?(  <pre>{JSON.stringify(user, null, 2)}</pre>) : (<pre hidden>{JSON.stringify(user, null, 2)}</pre>)}
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
            {user?(<button
          onClick={() => {
            // call logout
            setUser(null);
            localStorage.clear();
          }}
        >
          logout
        </button>) : (<button hidden>
          yea
        </button>)}
          </div>
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
