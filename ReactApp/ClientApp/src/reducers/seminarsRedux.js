import { constants } from '../actions/seminarActions';

const initialState = {
    seminars: [],
    isFetching: false,
    didInvalidate: false,
}

    function seminars(state = initialState, action) { 
        switch (action.type) {
            case constants.REQUEST_SEMINAR: 
                return Object.assign({}, state, {
                    isFetching: true,
                    didInvalidate: false
                });
            case constants.INVALIDATE_SEMINAR: 
                return Object.assign({}, state, {
                    didInvalidate: true
                });
            case constants.RECEIVE_SEMINAR: 
                return Object.assign({}, state, {
                    isFetching: false,
                    didInvalidate: false,
                    seminars: action.seminars
                });
            default:
                return state;
        //case seminarActionConst.CREATE_SEMINAR:

        //    const newId = state.seminars.length;
        //    let seminar = action.seminar;
        //    seminar.seminarId = newId;

        //    return {
        //        ...state,
        //        seminars: state.seminars.concat(seminar)
        //    } 

        //case seminarActionConst.UPADATE_SEMINAR:
        //    return {
        //        ...state,
        //        seminars: state.seminars.map(sem => {
        //            if (sem.seminarId !== action.seminar.seminarId) {
        //                return sem;
        //            }
        //            else {
        //                return action.seminar;
        //            }
        //        })
        //    } 
        
    }
}

export default seminars;


//export default function seminars(state = initialSeminars, action) {
//    switch (action.type) {
//        case seminarAction.CREATE_SEMINAR:
//            const newId = state.seminars[state.seminars.length ] ;
//            return {
//                seminars: state.seminars.concat(newId),
//                seminarsById: {
//                    ...state.seminarsById,
//                    [newId]: {
//                        id: 0,
//                        name: "",
//                        description: ""
//                    }
//                }
//            }
//        default:
//            return state;
//    }
//}

//const initialState = {
//    seminars: [],
//    loadinf: false,
//    errors: {},
//    forceReload: false
//}

//export const actionCreaters = {
//    requestSeminars: () => async (dispatch, getState) => {

//        const url = "api/Seminar/Get";
//        const response = await fetch(url);
//        const seminars = await response.json();
//        dispatch({ type: "FETCH_SEMINARS", seminars });
//    },
//    saveSeminar: seminar => async (dispatch, getState) => {
//        const url = "api/Seminar/Post";
//        const headers = new Headers();
//        headers.append("Content-Type", "application/json");
//        const requestOptions = {
//            method: "Post",
//            headers,
//            body: JSON.stringify(seminar)
//        };
//        const request = new Request(url, requestOptions);
//        await fetch(request);
//        dispatch({ type: "SAVE_SEMINAR", seminar });
//    },
//    deleteSeminar: seminarId => async (dispatch, getState) => {
//        const url = "api/Seminar/Delete/" + seminarId;
//        const requestOptions = {
//            method: "Delete"
//        };
//        const request = new Request(url, requestOptions);
//        await fetch(request);
//        dispatch({ type: "DELETE_SEMINAR", seminarId });
//    }
//};
//export const reducer = (state, action) => {
//    state = state || initialState;

//    switch (action.type) {
//        case "FETCH_SEMINARS": {
//            return {
//                ...state,
//                seminars: action.seminars,
//                loading: false,
//                errors: {},
//                forceReload: false
//            }
//        }
//        case "SAVE_SEMINAR": {
//            return {
//                ...state,
//                seminars: Object.assign({}, action.seminar),
//                forceReload: true
//            }
//        }
//        case "DELETE_SEMINAR": {
//            return {
//                ...state,
//                seminarId: action.seminarId,
//                forceReload: true
//            }
//        }
//        default:
//            return state;
//    }
//};