import axios from 'axios'
import * as types from'../constants'
import api from '../middlewares/api'

// to get all users
export function fetchUsers(filter = {}) {
    return dispatch => {

        dispatch({ type: types.FETCH_USERS })

        return api.get(types.API_ROOT + '/users', filter)
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
export function readUser(id) {
    return dispatch => {

        dispatch({ type: types.READ_USER })

        return api.get(types.API_ROOT + '/users/' + id)
        .then(response => {
            return dispatch({
                type: types.READ_USER_SUCCESS,
                user: response.user
            })
        })
        .catch( ex => {
            return dispatch({
                type: types.READ_USER_FAILURE,
                ex
            })
        })

    }
}

// create user
export function createUser(data) {
    return dispatch => {

        dispatch({ type: types.CREATE_USER })

        return api.post(types.API_ROOT + '/users', data)
        .then(response => {
            console.log('response', response);
            return dispatch({
                type: types.CREATE_USER_SUCCESS,
                user: response.user
            })
        })
        .catch( ex => {
            return dispatch({
                type: types.CREATE_USER_FAILURE,
                ex
            })
        })

    }
}

// update user
export function updateUser(id, data) {
    return dispatch => {

        dispatch({ type: types.UPDATE_USER })

        return api.put(types.API_ROOT + '/users/' + id, data)
        .then(response => {
            return dispatch({
                type: types.UPDATE_USER_SUCCESS,
                user: response.user
            })
        })
        .catch( ex => {
            return dispatch({
                type: types.UPDATE_USER_FAILURE,
                ex
            })
        })

    }
}

// update users
export function removeUsers(ids = []) {
    return dispatch => {

        dispatch({ type: types.REMOVE_USER })

        return api.delete(types.API_ROOT + '/users/delete', { users: ids })
        .then(response => {
            return dispatch({
                type: types.REMOVE_USER_SUCCESS,
                user: response.user
            })
        })
        .catch( ex => {
            return dispatch({
                type: types.REMOVE_USER_FAILURE,
                ex
            })
        })

    }
}
