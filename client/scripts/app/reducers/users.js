import * as types from'../constants'

const user = (state, action) => {
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

const users = (state = { isFetching: true, users: [], user: {} }, action) => {
    switch (action.type) {

        // add user
        case types.ADD_USER:
        return Object.assign({}, state, {
            isFetching: false,
            users: [
                ...state.users,
                user(undefined, action)
            ]
        })

        // set users
        case types.FETCH_USERS_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            users: action.users
        })

        // set single user
        case types.READ_USER_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            user: action.user
        });

        default:
        return state
    }
}

export default users
