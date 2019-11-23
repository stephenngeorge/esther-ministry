import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import gsap from 'gsap'

import { Page } from 'ministrylib'
import { Homepage } from './components'
import pageData from './components/globals/pageData'

const App = () => {
  useEffect(() => {
    gsap.from(".main-nav__icons, .main-nav__menu", {duration: .75, y: -80})
    gsap.from(".main-nav__menu--item > a", {duration: .5, delay: .6, opacity: 0})
    gsap.from(".main-nav__site-logo", {duration: .5, delay: .6, opacity: 0, x: -20})
  }, [])

  return (
    <div className="App">
      <Router>
        <Page {...pageData}>
          <Switch>
            {/* render HOME PAGE*/}
            <Route to="/">
              <Homepage />
            </Route>

            {/* render ABOUT PAGE */}
            <Route to="/about">
            </Route>

            {/* render ADVISORY BOARD PAGE */}
            <Route to="/advisory-board">
            </Route>
            
            {/* render CONTACT PAGE */}
            <Route to="/contact">

            </Route>
          </Switch>
        </Page>
      </Router>
    </div>
  )
}

export default App
