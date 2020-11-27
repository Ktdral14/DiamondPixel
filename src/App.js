import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import { Main } from './Main';
import { Designer } from './Designer';

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/Designer">
                    <Designer />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
