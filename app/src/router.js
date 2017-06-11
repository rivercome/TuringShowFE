import React from 'react'
import { browserHistory, hashHistory, IndexRoute, Route, Router } from 'react-router'
import AppComponent from './components/app'
import ApplyTurning from './components/content/ApplyTuring'
import ApplyInnovation from './components/content/ApplyInnovation'
import ApplyTuringOnline from './components/content/ApplyTuringOnline'
import Certreq from './components/content/Certreq'
import CertreqSuccess from './components/content/CertreqSuccess'

import ApplySpecial from './components/content/ApplySpecial'
import Download from './components/content/Download'
import Success from './components/content/Success'
import Rule from './components/content/Rule'
import TurningPage from './components/content/TuringPage'
import SciencePage from './components/content/SciencePage'
const history = process.env.NODE_ENV === 'development' ? hashHistory : browserHistory
const hostPath = window.location.host.substr(0, 4)
const root = hostPath === 'turi' ? TurningPage : SciencePage
const RouterApp = (props) => (
  <Router history={history}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={root} />
      <Route path="turing" component={TurningPage} />
      <Route path="applyTuring" component={Rule} />
      <Route path="certreq" component={Certreq} />
      <Route path="applySpecial" component={ApplySpecial} />
      {/*<Route path="applyTuringOnline" component={ApplyTuringOnline} />*/}
      <Route path="applyInnovation" component={ApplyInnovation} />
      <Route path="download" component={Download} />
      <Route path="rule" component={Rule} />
      <Route path="success" component={Success} />
      <Route path="certreqSuccess" component={CertreqSuccess} />
      <Route path="innovation" component={SciencePage} />
    </Route>
    {/*<Route path='404' component={NotFound} />*/}

  </Router>
)

export default RouterApp