import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'
import * as actions from '../../scripts/app/actions/users'
import * as types from '../../scripts/app/constants'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('should created an action to add a user', () => {
        const name = 'Joao Ahmad'
        const expectedAction = {
            type: types.ADD_USER,
            name
        }
        expect(actions.addUser(name)).toEqual(expectedAction)
    })
})
//
describe('async action', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('created FETCH_USERS_SUCCESS when fetching users has been done', () => {
        nock(types.API_ROOT)
        .get('/users')
        .reply(200, { users: [{id: 1, name: 'Some Name'}] })

        const expectedActions = [
            { type: types.FETCH_USERS_REQUEST },
            { type: types.FETCH_USERS_SUCCESS, users: [{id: 1, name: 'Some Name'}] }
        ]

        const store = mockStore({ users: [] })

        return store.dispatch(actions.fetchUsers())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})
