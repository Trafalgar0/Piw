import React, { useState} from "react"
import "./header.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { signInWithGoogle, logOut, signInWithGitHub } from "../../../FireBase"


const Header = () => {
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
          <img src={localStorage.getItem("profilePic")} alt="" className="profile"/>
          <div className="user">
            <h4>{localStorage.getItem("email")}</h4>
            <h4>{localStorage.getItem("name")}</h4>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
          {localStorage.getItem("email")?(<button className="log" onClick={logOut}> Log Out </button>) 
          : (<><button className="login-with-google-btn" onClick={signInWithGoogle}> Log In with Google</button> 
              <button className="login-with-git-btn" onClick={signInWithGitHub}> Log In with Github</button></>)}
            </ul>
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
