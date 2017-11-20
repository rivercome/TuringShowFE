import React from 'react'
import { browserHistory, hashHistory, IndexRoute, Route, Router } from 'react-router'
import AppComponent from './components/app'
import TuringFeedback from './components/content/FormContent/TuringFeedback'
import ApplyTuring from './components/content/FormContent/ApplyTuring'
import ApplyTuringOnline from './components/content/FormContent/ApplyTuringOnline'
import Download from './components/content/Download'
import Success from './components/content/Success/index'
import TuringSuccess from './components/content/Success/Turing'

import Rule from './components/content/Rule'
import TurningPage from './components/content/TuringPage'

const history = process.env.NODE_ENV === 'development' ? hashHistory : browserHistory

const RouterApp = (props) => (
  <Router history={history}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={TurningPage} />
      <Route path="turing" component={TurningPage} />
      <Route path="applyTuring" component={ApplyTuring} />
      <Route path="turingFeedback" component={TuringFeedback} />
      <Route path="applyOnline" component={ApplyTuringOnline} />
      <Route path="download" component={Download} />
      <Route path="rule" component={Rule} />
      <Route path="success" component={Success}>
        <IndexRoute component={TuringSuccess} />
      </Route>
    </Route>
    {/*<Route path='404' component={NotFound} />*/}

  </Router>
)

export default RouterApp