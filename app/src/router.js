import React from 'react'
import { browserHistory, hashHistory, IndexRoute, Route, Router } from 'react-router'
import AppComponent from './components/app'
import ApplyTurning from './components/content/ApplyTurning'
import ApplyInnovation from './components/content/ApplyInnovation'
import ApplySpecial from './components/content/ApplySpecial'
import Download from './components/content/Download'
import Success from './components/content/Success'
import Rule from './components/content/Rule'
import TurningPage from './components/content/TurningPage'
import SciencePage from './components/content/SciencePage'
const history = process.env.NODE_ENV === 'development' ? hashHistory : browserHistory
const hostPath = window.location.host.substr(0, 4)
const root = hostPath === 'turn' ? TurningPage : SciencePage
const RouterApp = (props) => (
  <Router history={history}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={root} />
      <Route path="turning" component={TurningPage} />
      <Route path="applyTurning" component={ApplyTurning} />
      <Route path="applySpecial" component={ApplySpecial} />
      <Route path="applyInnovation" component={ApplyInnovation} />
      <Route path="download" component={Download} />
      <Route path="rule" component={Rule} />
      <Route path="success" component={Success} />
      <Route path="innovation" component={SciencePage} />
    </Route>
    {/*<Route path='404' component={NotFound} />*/}

  </Router>
)

export default RouterApp