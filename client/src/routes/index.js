import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from "../components/About"
import Works from "../components/Works"
import Resume from "../components/Resume"
import NotFound from '../shared/NotFound'

const Routes = ( works ) => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/resume" component={Resume} />

        <Route path='*' component={NotFound} />
    </Switch>
)

export default withRouter(Routes)