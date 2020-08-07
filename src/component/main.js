import React from 'react';
import { Switch, Route } from 'react-router-dom';

import landingPage from "./landingpage";
import login from './login';
import signup from './signup';
import swipe from './swipe';
import matches from './matches';
import questions from './questions';

const Main = () => (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
        <Route path="/swipe" component={swipe} />
        <Route path="/matches" component={matches} />
        <Route path="/questions" component={questions} />
    </Switch>
)

export default Main;