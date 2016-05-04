import * as types from'../constants'

const initialState = {
    fetchingUsers: true, users: [],
    fetchingUser: true, user: {}
}

const users = (state = initialState, action) => {
    switch (action.type) {

        // set loader and clean up
        // case types.FETCH_USERS:
        // return Object.assign({}, state, {
        //     isFetching: true,
        //     users: []
        // })
        //
        // // set loader and clean up
        // case types.READ_USER:
        // return Object.assign({}, state, {
        //     isFetching: true,
        //     user: {}
        // })

        // fetch users success
        case types.FETCH_USERS_SUCCESS:
        return Object.assign({}, state, {
            fetchingUsers: false,
            status: 'success',
            users: action.users,
            success: true
        })

        // read user success
        case types.READ_USER_SUCCESS:
        return Object.assign({}, state, {
            fetchingUser: false,
            status: 'success',
            user: action.user
        });

        // read user error
        case types.READ_USER_ERROR:
        return Object.assign({}, state, {
            fetchingUser: false,
            status: 'error',
            err: action.err,
            success: false
        });

        // create user success
        case types.CREATE_USER_SUCCESS:
        console.log('reduce',action);
        return Object.assign({}, state, {
            fetchingUser: false,
            status: 'success',
            users: [
                action.user,
                ...state.users
            ]
        });

        // update user success
        case types.UPDATE_USER_SUCCESS:
        const users = state.users.map( (user) => {
            return (user.id == action.user.id)
            ? Object.assign({}, user, action.user)
            : user
        } )
        return Object.assign({}, state, {
            fetchingUser: false,
            user: action.user,
            users: users,
            success: true
        });

        // update user error
        case types.UPDATE_USER_ERROR:
        return Object.assign({}, state, {
            fetchingUser: false,
            err: action.err,
            success: false
        });

        // update user success
        case types.REMOVE_USER_SUCCESS:
        // let users = state.users.map( (user) => {
        //     return (user.id == action.user.id)
        //     ? Object.assign({}, user, action.user)
        //     : user
        // } )
        return Object.assign({}, state, {
            fetchingUser: false,
            // users: users
        });

        // update user error
        case types.REMOVE_USER_ERROR:
        return Object.assign({}, state, {
            fetchingUserS: false,
            err: action.err
        });

        default:
        return state
    }
}

export default users
