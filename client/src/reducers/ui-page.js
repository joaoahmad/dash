import * as types from'../constants'

const users = (state = { page: true, subpage: false }, action) => {
    switch (action.type) {

        // show page
        case types.UI_PAGE_MOUNT:
        return Object.assign({}, state, {
            page: true,
            subpage: false,
        })

        // hide page
        case types.UI_PAGE_UNMOUNT:
        return Object.assign({}, state, {
            page: true,
            subpage: false,
        })

        // show subpage
        case types.UI_SUBPAGE_MOUNT:
        return Object.assign({}, state, {
            subpage: true,
        })

        // hide subpage
        case types.UI_SUBPAGE_UNMOUNT:
        return Object.assign({}, state, {
            subpage: false,
        })

        default:
        return state
    }
}

export default users
