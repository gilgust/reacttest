﻿const initialState = [
    'my home playlist',
    'my work playlist',
];

export default function playlist(state = initialState, action) {
    if (action.type === 'ADD_PLAYLIST') {
        return state;
    } else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }

    console.log(action);
    return state;
}