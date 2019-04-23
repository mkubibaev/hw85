import React, {Component, Fragment} from 'react';
import FormElement from "../../components/UI/Form/FormElement";
import {connect} from "react-redux";
import {loginUser} from "../../store/actions/usersActions";

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.loginUser({...this.state})
    };

    render() {
        return (
            <Fragment>
                <h2>Login</h2>
                <form onSubmit={this.submitFormHandler}>
                    <FormElement
                        propertyName="username"
                        title="Username"
                        type="text"
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        placeholder="Enter your username"
                    />

                    <FormElement
                        propertyName="password"
                        title="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        placeholder="Enter your password"
                    />

                    <div className="row">
                        <div className="form-group mb-2 col-12">
                            <button type="submit" className="btn btn-info">Login</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.loginError
});

const mapDispatchToProps = dispatch => ({
    loginUser: userData => dispatch(loginUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
