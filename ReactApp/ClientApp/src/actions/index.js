import *as types from '../constants/ActionTypes';

export function createSeminar(name, description) {
    return {
        type: types.CREATE_SEMINAR,
        name,
        description
    };
}

export function editSeminar(id, name, description) {
    return {
        type: types.EDIT_SEMINAR,
        id,
        name,
        description
    };
}

export function getSeminar(id) {
    return {
        type: types.GET_SEMINAR,
        id
    };
}

export function deleteSeminar(id) {
    return {
        type: types.DELETE_SEMINAR,
        id
    };
}