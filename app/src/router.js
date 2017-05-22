import React from 'react'
import { hashHistory, Route, Router,IndexRoute,browserHistory } from 'react-router'
// import AppComponent from './router/home'
import AppComponent from './components/app'
import ApplyTurning from './components/content/ApplyTurning'
import Download from './components/content/Download'
import Success from './components/content/Success'
import Rule from './components/content/Rule'
import HomePage from './components/content/HomePage'
import NotFound from './components/plugins/NotFound'
const history = process.env.NODE_ENV === 'development' ? hashHistory : browserHistory

const RouterApp = (props)=>(
  <Router history={history}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={HomePage}/>
      <Route path="home" component={HomePage} />
      <Route path="applyTurning" component={ApplyTurning} />
      <Route path="download" component={Download} />
      <Route path="rule" component={Rule} />
      <Route path="success" component={Success} />
    </Route>
    {/*<Route path='404' component={NotFound} />*/}

  </Router>
)

export default RouterApp