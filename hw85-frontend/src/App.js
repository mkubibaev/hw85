import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Artists from "./containers/Artists/Artists";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";
import Header from "./components/Header/Header";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <main className="container py-3">
                    <Switch>
                        <Route path="/" exact component={Artists}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/artists/:id" component={Albums}/>
                        <Route path="/albums/:id" component={Tracks}/>
                    </Switch>
                </main>
            </Fragment>
        );
    }
}

export default App;
