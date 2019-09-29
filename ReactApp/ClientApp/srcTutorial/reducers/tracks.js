const initialState = [
    {
        id: 1,
        name: 'Super track'
    }
];

export default function tracks(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    } 

    console.log(action);
    return state;
}