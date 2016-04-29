import axios from 'axios'
import * as types from'../constants'

// to add a customer
export function addCustomer(name) {
    return {
        type: types.ADD_CUSTOMER,
        name
    }
}

// to get all customers
export function fetchCustomers() {
    return dispatch => {

        dispatch({ type: types.FETCH_CUSTOMERS_REQUEST })

        return axios.get('http://localhost:3002/customers.json')
        .then(response => response.data)
        .then(data => {
            return dispatch({
                type: types.FETCH_CUSTOMERS_SUCCESS,
                customers: data.customers
            })
        })
        .catch( ex => {
            return dispatch({
                type: types.FETCH_CUSTOMERS_FAILURE,
                ex
            })
        })

    }
}
