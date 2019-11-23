import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import gsap from 'gsap'

import { Page } from 'ministrylib'
import { AboutPage, BoardPage, ContactPage, Homepage } from './components'
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

            <Route path="/about">
              <AboutPage />
            </Route>

            <Route path="/advisory-board">
              <BoardPage />
            </Route>
            
            {/* render CONTACT PAGE */}
            <Route path="/contact">
              <ContactPage />
            </Route>
            
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Page>
      </Router>
    </div>
  )
}

export default App
