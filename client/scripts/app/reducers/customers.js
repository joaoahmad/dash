const entry = (state, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
        return {
            id: action.id,
            name: action.name,
        }
        default:
        return state
    }
}

const entries = (state = { isFetching: true, items: [] }, action) => {
    switch (action.type) {

        // add entry
        case 'ADD_ENTRY':
        return Object.assign({}, state, {
            isFetching: false,
            entries: [
                ...state.entries,
                entry(undefined, action)
            ]
        })

        // set entries
        case 'FETCH_ENTRIES':
        return Object.assign({}, state, {
            isFetching: false,
            entries: action.entries
        })
        default:
        return state
    }
}

export default entries