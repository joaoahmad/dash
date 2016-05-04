import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import moment from 'moment'
import _ from 'lodash'
import { reduxForm } from 'redux-form'
export const fields = [ 'name', 'email', 'telephone' ]

import Table from '../components/UXTable'
import Loading from '../components/Loading'
import UserForm from '../containers/UserForm'
import { Subpage } from '../containers/Page';
import { createUser } from '../actions/users'

class UserDraft extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
    }

    render(){
        const { user } = this.props
        return (
            <Subpage>
                <div>
                    <UserForm onSubmit={this.handleSubmit} />
                    <pre>{JSON.stringify(user)}</pre>
                </div>
            </Subpage>
        )
    }

    handleSubmit(data, dispatch){
        dispatch(createUser(data));
    }
}

const mapStateToProps = (state) => {
    return Object.assign({
        isFetching: true,
        user: {}
    }, state.users)
}

export default connect(mapStateToProps)(UserDraft)
