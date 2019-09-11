import seminarAction from '../constants/ActionTypes';

const initialSeminars = {
    seminars: [],
    seminarsById: {}
}

export default function seminars(state = initialSeminars, action) {
    switch (action.type) {
        case seminarAction.CREATE_SEMINAR:
            const newId = state.seminars[state.seminars.length - 1] + 1;
            return {
                seminars: state.seminars.concat(newId),
                seminarsById: {
                    ...state.seminarsById,
                    [newId]: {
                        id: newId,
                        name: "",
                        description: ""
                    }
                }
            }
        default:
            return state;
    }
}