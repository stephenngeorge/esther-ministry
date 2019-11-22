import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Page } from 'ministrylib'
import { Homepage } from './components'
import pageData from './components/globals/pageData'

const App = () => {
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
