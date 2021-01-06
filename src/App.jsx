import React from 'react'
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import { Main } from './Main';
import { Designer } from './Designer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);
export const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/Designer">
                    <Designer />
                </Route>
            </Switch>
        </HashRouter>
    )
}
