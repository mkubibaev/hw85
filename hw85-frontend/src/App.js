import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Artists from "./containers/Artists/Artists";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Artists} />
                <Route path="/artists/:id" component={Albums} />
                <Route path="/albums/:id" component={Tracks} />
            </Switch>
        );
    }
}

export default App;
