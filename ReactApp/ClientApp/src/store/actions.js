import C from './constants'

export const getSeminars = (elems) =>
    ({
        type: C.GET_SEMINARS,
        elems
    })