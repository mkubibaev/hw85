import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Artists from "./containers/Artists/Artists";
import Albums from "./containers/Albums/Albums";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Artists} />
                <Route path="/artists/:id" component={Albums} />

            </Switch>
        );
    }
}

export default App;
