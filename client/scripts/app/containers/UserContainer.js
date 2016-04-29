import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import moment from 'moment'
import _ from 'lodash'
import Table from '../components/UXTable'
import Loading from '../components/Loading'
import { fetchUser } from '../actions/users'

class UserContainer extends React.Component{
    componentDidMount(){
        const { dispatch } = this.props
        dispatch(fetchUser(28))
    }
    render(){
        const { user, isFetching } = this.props
        console.log(this.props);
        return (
            <div>
                <Loading isFetching={isFetching}>
                    <div>{user.name}</div>
                </Loading>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return Object.assign({
        isFetching: true,
        user: {}
    }, state.user)
}

export default connect(mapStateToProps)(UserContainer)
