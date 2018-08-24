import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import DashBoard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={DashBoard}></IndexRoute>
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />  
    </Router>
)