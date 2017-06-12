import React from 'react'
import { browserHistory, hashHistory, IndexRoute, Route, Router } from 'react-router'
import AppComponent from './components/app'
import ApplyInnovation from './components/content/FormContent/ApplyInnovation'
import Certreq from './components/content/FormContent/Certreq'
import TuringFeedback from './components/content/FormContent/TuringFeedback'
import ApplySpecial from './components/content/FormContent/ApplySpecial'
import ApplyTuringOnline from './components/content/FormContent/ApplyTuringOnline'
import Download from './components/content/Download'
import Success from './components/content/Success/index'
import TuringSuccess from './components/content/Success/Turing'
import InnovationSuccess from './components/content/Success/Innovation'
import CertreqSuccess from './components/content/Success/Certreq'

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
      <Route path="turingFeedback" component={TuringFeedback} />
      <Route path="applySpecial" component={ApplySpecial} />
      {/*<Route path="applyTuringOnline" component={ApplyTuringOnline} />*/}
      <Route path="applyInnovation" component={ApplyInnovation} />.
      <Route path="download" component={Download} />
      <Route path="rule" component={Rule} />
      <Route path="success" component={Success}>
        <IndexRoute component={TuringSuccess} />
        <Route path="turing" component={TuringSuccess} />
        <Route path="innovation" component={InnovationSuccess} />
        <Route path="certreq" component={CertreqSuccess} />
      </Route>
      <Route path="certreqSuccess" component={CertreqSuccess} />
      <Route path="innovation" component={SciencePage} />
    </Route>
    {/*<Route path='404' component={NotFound} />*/}

  </Router>
)

export default RouterApp