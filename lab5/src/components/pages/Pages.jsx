import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "../home/Home"
import AddNew from "../addNew/AddNew"

const Pages = () => {
  return (
    <>
      <Router>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/addNew' component={AddNew} />
      </Router>
    </>
  )
}

export default Pages
