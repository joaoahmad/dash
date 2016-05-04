import React from 'react';
import activeComponent from 'react-router-active-component';
import Subnav from '../components/Subnav';
import Panel from '../components/UXPanel';
import Container from '../components/Container';
import Page, { Content } from '../containers/Page';
import UsersContainer from '../containers/Users';

var Li = activeComponent('li');

class Users extends React.Component {

    render() {
        const menuItems = [
            { label: 'Lista', to: '/users' },
            { label: 'Relatórios', to: '/users/reports' },
            { label: 'Novo', to: '/users/a' },
        ]
        return (
            <Page title="Usuários">
                <Subnav title='Usuários' menuItems={menuItems} />
                <Content>
                    <div className="row">
                        <div className="col-12">
                            <UsersContainer />
                        </div>
                    </div>
                </Content>
                {this.props.children}
            </Page>
        )
    }

}

export default Users
