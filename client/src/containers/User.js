import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import moment from 'moment'
import _ from 'lodash'
import { reduxForm } from 'redux-form'

import Table from '../components/UXTable'
import Loading from '../components/Loading'
import UserForm from '../containers/UserForm'
import { Subpage } from '../containers/Page';
import { readUser, updateUser } from '../actions/users'

class UsersView extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.readUser();
    }

    componentDidUpdate(prevProps){
        const { userId } = this.props.params
        if(prevProps.params.userId != userId){
            this.readUser();
        }
    }

    handleSubmit(data, dispatch){
        const { userId } = this.props.params
        return dispatch(updateUser(userId, data));
    }

    readUser(){
        const { dispatch, params: { userId } } = this.props
        dispatch(readUser(userId))
    }

    render(){
        const { user, fetchingUser } = this.props
        return (
            <Subpage>
                <Loading isFetching={fetchingUser}>

                    <div>
                        <UserForm initialValues={user} onSubmit={this.handleSubmit} />
                        <pre>{JSON.stringify(user)}</pre>
                    </div>

                </Loading>
            </Subpage>
        )
    }

}

const mapStateToProps = (state) => {
    return Object.assign({
        fetchingUser: true,
        user: {}
    }, state.users)
}

export default connect(mapStateToProps)(UsersView)
