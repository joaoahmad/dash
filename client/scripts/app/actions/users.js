import axios from 'axios'
import * as types from'../constants'
import Api from '../services/Api'

// to add a user
export function addUser(name) {
    return {
        type: types.ADD_USER,
        name
    }
}

// to get all users
export function fetchUsers() {
    return dispatch => {

        dispatch({ type: types.FETCH_USERS_REQUEST })

        return Api.get(types.API_ROOT + '/users')
        .then(response => {
            return dispatch({
                type: types.FETCH_USERS_SUCCESS,
                users: response.users
            })
        })
        .catch( ex => {
            return dispatch({
                type: types.FETCH_USERS_FAILURE,
                ex
            })
        })

    }
}

// to get one user
export function fetchUser(id) {
    return dispatch => {

        dispatch({ type: types.FETCH_USER_REQUEST })

        return Api.get(types.API_ROOT + '/users/' + id)
        .then(response => {
            return dispatch({
                type: types.FETCH_USER_SUCCESS,
                user: response.user
            })
        })
        .catch( ex => {
            return dispatch({
                type: types.FETCH_USER_FAILURE,
                ex
            })
        })

    }
}
