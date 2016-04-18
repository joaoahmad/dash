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

        // adding entry
        case 'ADD_ENTRY':
        return Object.assign({}, state, {
            items: [
                ...state.items,
                entry(undefined, action)
            ]
        })

        // setting entries
        case 'FETCH_ENTRIES':
        return Object.assign({}, state, {
            isFetching: false,
            items: action.entries
        })
        default:
        return state
    }
}

export default entries
