import React from "react"
import "./logIn.css"
import { login } from "../../login"
import { UserContext } from "../../UserContex"
import { useContext } from "react"

const LogIn = () => {
  const {user, setUser}  = useContext(UserContext);
  return (
    <>
      <section className='Log in'>
        <div className='container'>
          <form className='shadow' id = 'wrapper'>
            <div>
              <h1>Email</h1>
              <input type='text' placeholder='Email' />
            </div>
            <div>
              <h1>Password</h1>
              <input type='text' placeholder='Password' />
            </div>
            <button type = "button"
          onClick={async () => {
            const user = await login();
            setUser(user);
            localStorage.setItem("email", user.email)
            localStorage.setItem("passowrd", user.password)
            localStorage.setItem("name", user.name)
            localStorage.setItem("surname", user.surname)
          }}
        >
          Log In
        </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default LogIn