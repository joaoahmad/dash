import axios from 'axios'

let nextEntryId = 0
let url = '/entries.json'

export const addEntry = (name) => {
    return {
        type: 'ADD_ENTRY',
        id: nextEntryId++,
        name
    }
}

function requestEntries(dispatch){
    return axios.get(url)
}

export function fetchEntries(entry) {
    return dispatch => {
        axios.get(url).then( response => {
            console.log(response.data);
            dispatch({
                type: 'FETCH_ENTRIES',
                payload: response.data
            })
        })
    }
}
