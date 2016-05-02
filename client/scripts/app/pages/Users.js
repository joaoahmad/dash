import React from 'react';
import Page from '../components/Page';
import Subnav from '../components/Subnav';
import Panel from '../components/UXPanel';
import Container from '../components/Container';
import activeComponent from 'react-router-active-component';

var Li = activeComponent('li');

class Users extends React.Component {

    render() {
        const menuItems = [
            { label: 'Usuários', to: '/users' },
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
