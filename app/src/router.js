import React from 'react'
import { hashHistory, Route, Router,IndexRoute,browserHistory } from 'react-router'
import AppComponent from './components/app'
import ApplyTurning from './components/content/ApplyTurning'
import ApplyInnovation from './components/content/ApplyInnovation'
import Download from './components/content/Download'
import Success from './components/content/Success'
import Rule from './components/content/Rule'
import TurningPage from './components/content/TurningPage'
import SciencePage from './components/content/SciencePage'
import NotFound from './components/plugins/NotFound'
const history = process.env.NODE_ENV === 'development' ? hashHistory : browserHistory

const RouterApp = (props)=>(
  <Router history={history}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={TurningPage}/>
      <Route path="turning" component={TurningPage} />
      <Route path="applyTurning" component={ApplyTurning} />
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