import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from "../components/About"
import Projects from "../components/Projects"
import Resume from "../components/Resume"

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/about" component = {About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)

export default Routes