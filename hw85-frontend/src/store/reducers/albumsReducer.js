import {
    FETCH_ALBUMS_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST
} from "../actions/actionTypes";

const initialState = {
    albums: [],
    error: null,
    loading: true
};

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {...state, loading: true};

        case FETCH_DATA_FAILURE:
            return {...state, loading: false};

        case FETCH_ALBUMS_SUCCESS:
            return {...state, albums: action.albums, loading: false};

        default:
            return state
    }
};

export default albumReducer;
