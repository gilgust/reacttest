//import * as types from '../constants/actionTypes';
import seminarAction from '../constants/actionTypes';
export function createSeminar(seminar) {
    return {
        type: seminarAction.CREATE_SEMINAR,
        seminar: seminar
    };
}

export function readSeminar(id) {
    return {
        type: seminarAction.READ_SEMINAR,
        id
    };
}

export function updateSeminar(seminar) {
    return {
        type: seminarAction.UPADATE_SEMINAR,
        seminar: seminar
    };
}

export function deleteSeminar(id) {
    return {
        type: seminarAction.DELETE_SEMINAR,
        id
    };
}

export function selectSeminar() {
    return {
        type: seminarAction.SELECT_SEMINAR
    };
}

export function invalidateSeminar() {
    return {
        type: seminarAction.INVALIDATE_SEMINAR
    }
} 

function receiveSeminar(json) {
    return {
        type: seminarAction.RECEIVE_SEMINAR,
        posts: json.data,
    }
}