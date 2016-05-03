import * as types from'../constants'

const users = (state = { isFetching: true, users: [], user: {} }, action) => {
    switch (action.type) {

        // set loader and clean up
        case types.FETCH_USERS:
        return Object.assign({}, state, {
            isFetching: true,
            users: []
        })

        // set loader and clean up
        case types.READ_USER:
        return Object.assign({}, state, {
            isFetching: true,
            user: {}
        })

        // fetch users success
        case types.FETCH_USERS_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            users: action.users,
            success: true
        })

        // read user success
        case types.READ_USER_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            user: action.user,
            success: true
        });

        // read user error
        case types.READ_USER_ERROR:
        return Object.assign({}, state, {
            isFetching: false,
            err: action.err,
            success: false
        });

        default:
        return state
    }
}

export default users
