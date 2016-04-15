const entry = (state, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
        return {
            id: action.id,
            name: action.name,
        }
        case 'FETCH_ENTRIES':
        return Object.assign({}, state, {
            isFetching: true,
            items: action.entries,
        })
        default:
        return state
    }
}

const entries = (state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
        return [
            ...state,
            entry(undefined, action)
        ]
        case 'FETCH_ENTRIES':
        return Object.assign({}, state, {
            [action.entries]: posts(state[action.entries], action)
        })
        //   [
        //     ...state,
        //     entry(undefined, action)
        //   ]
        default:
        return state
    }
}

export default entries
