import {push} from "connected-react-router";
import axios from "../../axios-api";
import {
    ADD_TRACKHISTORY_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_TRACKHISTORY_SUCCESS
} from "./actionTypes";

export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

export const fetchTrackHistorySuccess = trackHistory => ({type: FETCH_TRACKHISTORY_SUCCESS, trackHistory});
export const addTrackHistorySuccess = trackData => ({type: ADD_TRACKHISTORY_SUCCESS, trackData});

export const fetchTrackHistory = () => {
    return async (dispatch, getState) => {
        const token = getState().users.user;

        if (!token) {
            dispatch(push('/login'))
        } else {
            dispatch(fetchDataRequest());

            try {
                const response = await axios.get('/track_history',{headers: {'Authorization': token.token}});

                dispatch(fetchTrackHistorySuccess(response.data));
            } catch (e) {
                dispatch(fetchDataFailure(e));
            }
        }
    }
};

export const addTrackHistory = trackId => {
    return async (dispatch, getState) => {
        const token = getState().users.user.token;

        if (!token) {
            dispatch(push('/login'));
        } else {
            dispatch(fetchDataRequest());

            try {
                await axios.post('/track_history', {track: trackId},{headers: {'Authorization': token}});

                dispatch(addTrackHistorySuccess());
            } catch (e) {
                console.log(e);
            }
        }
    };
};
