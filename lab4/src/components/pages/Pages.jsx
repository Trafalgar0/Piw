import React, {useState, useMemo} from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "../home/Home"
import AddNew from "../addNew/AddNew"
import LogIn from "../logIn/LogIn"
import { UserContext } from "../../UserContex"

const Pages = () => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <>
      <Router>
        <UserContext.Provider value={value}>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/addNew' component={AddNew} />
          <Route exact path='/logIn' component={LogIn} />
        </UserContext.Provider>
      </Router>
    </>
  )
}

export default Pages
