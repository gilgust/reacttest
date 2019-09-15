import *as types from '../constants/ActionTypes';

export function createSeminar(seminar) {
    return {
        type: types.CREATE_SEMINAR,
        seminar: seminar
    };
}

export function readSeminar(id) {
    return {
        type: types.READ_SEMINAR,
        id
    };
}

export function updateSeminar(seminar) {
    return {
        type: types.UPADATE_SEMINAR,
        seminar: seminar
    };
}

export function deleteSeminar(id) {
    return {
        type: types.DELETE_SEMINAR,
        id
    };
}