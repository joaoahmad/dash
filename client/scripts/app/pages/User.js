import React from 'react';
import Page from '../components/Page';
import Subnav from '../components/Subnav';
import Panel from '../components/UXPanel';
import Container from '../components/Container';
import UserContainer from '../containers/UserContainer';
import activeComponent from 'react-router-active-component';

var Li = activeComponent('li');

class User extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        // const { userId } = this.props.params
        const menuItems = [
            { label: 'Pedidos', to: '/' },
            { label: 'Clientes', to: '/dsa' },
        ]
        return (
            <Page>
                <Subnav title='Usuário' menuItems={menuItems} />
                <Container>
                    <div className="row">
                        <div className="col-12">
                            <UserContainer />
                        </div>
                    </div>
                </Container>
            </Page>
        )
    }

}

export default User
