import axios from '../../axios-api';
import {FETCH_ARTIST_SUCCESS, FETCH_ARTISTS_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST} from "./actionTypes";

export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});
export const fetchArtistSuccess = artist => ({type: FETCH_ARTIST_SUCCESS, artist});

export const fetchArtists = () => {
    return async dispatch => {
        dispatch(fetchDataRequest());

        try {
            const response = await axios.get('/artists');
            dispatch(fetchArtistsSuccess(response.data))
        } catch (e) {
            dispatch(fetchDataFailure(e));
        }
    }
};

export const fetchArtist = id => {
    return async dispatch => {
        dispatch(fetchDataRequest());

        try {
            const response = await axios.get(`/artists/${id}`);
            dispatch(fetchArtistSuccess(response.data));
        } catch (e) {
            dispatch(fetchDataFailure(e));
        }
    }
};
