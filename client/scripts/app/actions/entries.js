import axios from 'axios'

let nextEntryId = 0
let url = '/entries.json'

// to add entry
export const addEntry = (name) => {
    return {
        type: 'ADD_ENTRY',
        id: nextEntryId++,
        name
    }
}

// to get all entries
export function fetchEntries(entry) {
    return dispatch => {
        setTimeout(function(){
            axios.get(url).then( response => {
                console.log('response',response.data);
                dispatch({
                    type: 'FETCH_ENTRIES',
                    entries: response.data
                })
            })
        }, 500);
    }
}
