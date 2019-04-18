import React, {Component} from 'react';
import Artists from "./containers/Artists";
import {Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Artists} />

            </Switch>
        );
    }
}

export default App;
