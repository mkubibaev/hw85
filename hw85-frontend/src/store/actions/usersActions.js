import axios from '../../axios-api';
import {push} from 'connected-react-router';

import {LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS} from "./actionTypes";

export const registerUserSuccess = user => ({type: REGISTER_USER_SUCCESS, user});
export const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});

export const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
export const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});


export const registerUser = userData => {
    return async dispatch => {
        try {
            const response = await axios.post('/users', userData);

            dispatch(registerUserSuccess(response.data.user));
            dispatch(push('/'));
        } catch (error) {

            if (error.response && error.response.data) {
                dispatch(registerUserFailure(error.response.data));
            } else {
                dispatch(registerUserFailure({global: 'No connection'}));
            }

        }
    };
};

export const loginUser = userData => {
    return async dispatch => {
        try {
            const response = await axios.post('/users/sessions', userData);

            dispatch(loginUserSuccess(response.data.user));
            dispatch(push('/'));
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(loginUserFailure(e.response.data));
            } else {
                dispatch(loginUserFailure({global: 'No connection'}));
            }
        }
    }
};
