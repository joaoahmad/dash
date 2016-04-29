import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'
import * as actions from '../../scripts/app/actions/customers'
import * as types from '../../scripts/app/constants'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('should created an action to add a customer', () => {
        const name = 'Joao Ahmad'
        const expectedAction = {
            type: types.ADD_CUSTOMER,
            name
        }
        expect(actions.addCustomer(name)).toEqual(expectedAction)
    })
})
//
describe('async action', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('created FETCH_CUSTOMERS_SUCCESS when fetching customers has been done', () => {
        nock('http://localhost:3002/')
        .get('/customers.json')
        .reply(200, { customers: [{id: 1, name: 'Some Name'}] })

        const expectedActions = [
            { type: types.FETCH_CUSTOMERS_REQUEST },
            { type: types.FETCH_CUSTOMERS_SUCCESS, customers: [{id: 1, name: 'Some Name'}] }
        ]

        const store = mockStore({ customers: [] })

        return store.dispatch(actions.fetchCustomers())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})
