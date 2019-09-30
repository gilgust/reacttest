import fetch from 'cross-fetch';

export const constants = {
    CREATE_SEMINAR: 'CREATE_SEMINAR',
    READ_SEMINAR: 'READ_SEMINAR',
    UPADATE_SEMINAR: 'UPADATE_SEMINAR',
    DELETE_SEMINAR: 'DELETE_SEMINAR',
    SELECT_SEMINAR: 'SELECT_SEMINAR',
    INVALIDATE_SEMINAR: 'INVALIDATE_SEMINAR',
    RECEIVE_SEMINAR: 'RECEIVE_SEMINAR',
    REQUEST_SEMINAR: 'REQUEST_SEMINAR'
};

export function createSeminar(seminar) { 
    return {
        type: constants.CREATE_SEMINAR,
        seminar: seminar
    };
}

export function readSeminar(id) { 
    return {
        type: constants.READ_SEMINAR,
        id
    };
}

export function updateSeminar(seminar) { 
    return {
        type: constants.UPADATE_SEMINAR,
        seminar: seminar
    };
}

export function deleteSeminar(id) { 
    return {
        type: constants.DELETE_SEMINAR,
        id
    };
}

export function selectSeminar(id) { 
    return {
        type: constants.SELECT_SEMINAR,
        id
    };
}

export function invalidateSeminar(json) { 
    return {
        type: constants.INVALIDATE_SEMINAR,
        json
    }
} 

export function receiveSeminars(json) { 
    return {
        type: constants.RECEIVE_SEMINAR,
        seminars: json,
        isFetching: false
    }
}

export function requestSeminar() { 
    return {
        type: constants.REQUEST_SEMINAR
    }
}

export function fetchSeminar() {
    return dispatch => {
        dispatch(requestSeminar());
        return fetch('api/Seminar/Get')
            .then(response => { 
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(json => dispatch(receiveSeminars(json)))
    }
}

export function shuldFetchSeminar(state) { 
    const seminars = state.seminars;
    return !seminars.isFetching;
}

export function fetchSeminarsIfNeeded() {
    return (dispatch, getState) => { 
        if (shuldFetchSeminar(getState())) {
            return dispatch(fetchSeminar());
        }
    }
}