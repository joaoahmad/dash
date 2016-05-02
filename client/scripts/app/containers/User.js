import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import moment from 'moment'
import _ from 'lodash'
import { reduxForm } from 'redux-form'
export const fields = [ 'name', 'email', 'telephone' ]

import Table from '../components/UXTable'
import Loading from '../components/Loading'
import { readUser, updateUser } from '../actions/users'

class Form extends React.Component{

    render(){
        const {
            fields: { name, email, telephone },
            submitting,
            resetForm,
            handleSubmit
        } = this.props

        return (
            <form ref='form' onSubmit={handleSubmit}>
                <div>
                    <label>Nome</label>
                    <div>
                        <input type="text" placeholder="Nome"  {...name}/>
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <input type="email" placeholder="Email" {...email}/>
                    </div>
                </div>
                <div>
                    <label>Telefone</label>
                    <div>
                        <input type="text" placeholder="Telefone" {...telephone}/>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={submitting}>
                        {submitting ? <i/> : <i/>} Submit
                    </button>
                    <button type="button" disabled={submitting} onClick={resetForm}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }
}



Form = reduxForm({
    form: 'simple',
    fields
})(Form)

class UsersView extends React.Component{

    componentDidMount(){
        const { dispatch, params: { userId } } = this.props
        dispatch(readUser(userId))
    }

    componentWillUnmount(){
        // dispatch(fetchUser(id))
    }

    render(){
        const { user, isFetching } = this.props
        return (
            <Loading isFetching={isFetching}>

                <div>
                    <Form initialValues={user} handleSubmit={this.handleSubmit} />
                    <pre>{JSON.stringify(user)}</pre>
                </div>

            </Loading>
        )
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('asads');
        // const { dispatch, id } = this.props
        // const form = this.refs.form;
        // const data = serialize(form, { hash: true });
        // dispatch(updateUser(id, data))
        return false;
    }
}

// UsersView.propTypes = {
//     user: propTypes.object.isRequired
// }

const mapStateToProps = (state) => {
    return Object.assign({
        isFetching: true,
        user: {}
    }, state.users)
}

export default connect(mapStateToProps)(UsersView)
