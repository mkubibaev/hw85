import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Artists from "./containers/Artists/Artists";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";
import Header from "./components/Header/Header";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import {connect} from "react-redux";
import TrackHistory from "./containers/TrackHistory/TrackHistory";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header user={this.props.user}/>
                <main className="container py-3">
                    <Switch>
                        <Route path="/" exact component={Artists}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/artists/:id" component={Albums}/>
                        <Route path="/albums/:id" component={Tracks}/>
                        <Route path="/track-history" component={TrackHistory}/>
                    </Switch>
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

export default withRouter(connect(mapStateToProps)(App));
