import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import moment from 'moment'
import _ from 'lodash'
import Table from '../components/UXTable'
import Loading from '../components/Loading'
import { fetchUsers, removeUsers } from '../actions/users'

class Item extends React.Component{

    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove(){
        const { dispatch, user } = this.props
        dispatch(removeUsers([user.id]))
    }

    render(){

        const { user }  = this.props;
        const toggle = (1 == 1) ? true : false ;
        const itemMeta = 'Criado em ' + moment(user.created).format('DD/MM/YYYY');
        return (
            <Table.Item ref={`i${user.id}`} key={user.id} count={user.id}>
                <Table.ItemContent>
                    <Link to={`/users/e/${user.id}`} className="title">{user.name}</Link>
                    <div className="meta">{itemMeta}</div>
                </Table.ItemContent>
                <Table.ItemActions>
                    <a href="#" onClick={this.handleRemove}>Delete</a>
                </Table.ItemActions>
            </Table.Item>
        )
    }

}

Item = connect()(Item)

class UsersList extends React.Component{

    constructor(props){
        super(props)
        this.onChangeFilter = this.onChangeFilter.bind(this)
    }

    componentDidMount(){
        const { dispatch } = this.props
        dispatch(fetchUsers())
    }

    onChangeFilter(){
        const { dispatch } = this.props
        const filter = {
            name: this.refs['filter.name'].value,
            status: this.refs['filter.status'].value,
        }
        dispatch(fetchUsers(filter))
    }

    render(){
        const { users, fetchingUsers } = this.props
        const items = this.props.users.map((user, i) => <Item user={user} key={i}  />);

        return (
            <div>
                <Table>
                    <Table.Header>
                        <input ref='filter.name' onChange={this.onChangeFilter} placeholder='Buscar' type='text' />
                        <select ref='filter.status' onChange={this.onChangeFilter}>
                            <option value=''>Todos</option>
                            <option value='inactive'>Inativos</option>
                            <option value='guests'>Convidados</option>
                            <option value='rejected'>Rejeitados</option>
                        </select>
                    </Table.Header>
                    <Loading isFetching={fetchingUsers}>
                        <Table.Body>
                            {items}
                        </Table.Body>
                    </Loading>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return Object.assign({
        fetchingUsers: true,
        users: []
    }, state.users)
}

export default connect(mapStateToProps)(UsersList)
