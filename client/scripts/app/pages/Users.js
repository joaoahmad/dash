import React from 'react';
import activeComponent from 'react-router-active-component';
import Subnav from '../components/Subnav';
import Panel from '../components/UXPanel';
import Container from '../components/Container';
import Page from '../containers/Page';

var Li = activeComponent('li');

class Users extends React.Component {

    render() {
        const menuItems = [
            { label: 'Lista', to: '/users' },
            { label: 'Relatórios', to: '/users/reports' },
        ]
        return (
            <Page title="Usuários">
                <Subnav title='Usuários' menuItems={menuItems} />
                <Container>
                    <div className="row">
                        <div className="col-12">
                            {this.props.children}
                        </div>
                    </div>
                </Container>
            </Page>
        )
    }

}

export default Users
