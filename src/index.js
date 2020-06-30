import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import {Provider} from 'react-redux'

import Main from "./Main/Main";
import {Login} from "./pages/login/login";
import {Register} from "./pages/register/register";
import {store} from './redux/store'
ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route  path="/" component={Main}/>
        </Switch>
    </HashRouter>
    </Provider>
    ,document.getElementById('root'))
