import React from 'react';
import Page from '../components/Page';
import Subnav from '../components/Subnav';
import Panel from '../components/UXPanel';
import Container from '../components/Container';
import UsersContainer from '../containers/UsersContainer';
import activeComponent from 'react-router-active-component';

var Li = activeComponent('li');

class Users extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const menuItems = [
            { label: 'Pedidos', to: '/' },
            { label: 'Clientes', to: '/dsa' },
        ]
        return (
            <Page title="Usuários">
                <Subnav title='Usuários' menuItems={menuItems} />
                <Container>
                    <div className="row">
                        <div className="col-12">
                            <UsersContainer />
                        </div>
                    </div>
                </Container>
            </Page>
        )
    }

}

export default Users
