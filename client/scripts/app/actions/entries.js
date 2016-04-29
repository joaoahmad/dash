import axios from 'axios'

let nextEntryId = 0
let url = '/entries.json'

// to add entry
export const addEntry = (name) => {
    return dispatch => {

        setTimeout(function(){
            axios.get(url).then( response => {
                dispatch({
                    type: 'ADD_ENTRY',
                    id: nextEntryId++,
                    name
                })
            })
        }, 500);

    }
}

// to get all entries
export function fetchEntries(entry) {
    return dispatch => {

        setTimeout(function(){
            axios.get(url).then( response => {
                dispatch({
                    type: 'FETCH_ENTRIES',
                    entries: response.data
                })
            })
        }, 500);

    }
}
