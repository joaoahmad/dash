import * as types from'../constants'

// ui page view
export function uiPageMount() {
    return {
        type: types.UI_PAGE_MOUNT,
        page: true,
        subpage: false
    }
}

// ui subpage view
export function uiSubpageMount() {
    return {
        type: types.UI_SUBPAGE_MOUNT,
        subpage: true
    }
}

// ui subpage view
export function uiSubpageUnmount() {
    return {
        type: types.UI_SUBPAGE_UNMOUNT,
        subpage: false
    }
}
