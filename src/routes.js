import React, { Component}  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Router, Route, hashHistory } from 'react-router'

const Loading = () => <div>Loading...</div>

const Home = Loadable({
    loader: () => import('./routes/Home'),
    loading:Loading,
});

const About = Loadable({
    loader: () => import('./routes/About'),
    loading:Loading, 
});

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About} />
        </Switch>
    </Router>
)

