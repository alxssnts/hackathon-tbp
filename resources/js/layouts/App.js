import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import CrewsList from "../pages/CrewsList";
import ShipsList from "../pages/ShipsList";
import RoutesList from "../pages/RoutesList";
import WorksList from "../pages/WorksList";
import DutiesList from "../pages/DutiesList";

const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/crews">
                    <CrewsList/>
                </Route>
                <Route path="/ships">
                    <ShipsList/>
                </Route>
                <Route path="/routes">
                    <RoutesList/>
                </Route>
                <Route path="/works">
                    <WorksList/>
                </Route>
                <Route path="/duties">
                    <DutiesList/>
                </Route>
                <Route path="/">
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
