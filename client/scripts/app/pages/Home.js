import React from 'react';
import activeComponent from 'react-router-active-component';
import Subnav from '../components/Subnav';
import Loading from '../components/Loading';
import Panel from '../components/UXPanel';
import Container from '../components/Container';
import Page from '../containers/Page';

var Li = activeComponent('li');

class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const menuItems = [
            { label: 'Pedidos', to: '/' },
            { label: 'Clientes', to: '/dsa' },
        ]
        return (
            <Page title="Hey Listen!">
                <Subnav title='Hey Listen!' menuItems={menuItems} />
                <Container>
                    <div className="row">
                        <div className="col-3">
                            <Panel type="compact" ref="panel">
                                <Panel.Header title="Menu" />
                                <Panel.Body>
                                    <ul className="nav">
                                        <Li to={'/'}><i className="vi-dashboard is-icon"></i> Dashboard</Li>
                                        <Li to={'/informacoes'}><i className="vi-calendar is-icon"></i> Informações</Li>
                                        <Li to={'/configuracoes'}><i className="vi-cog is-icon"></i> Configuraçoes</Li>
                                        <li className="nav-separator"></li>
                                        <Li to={'/aulas'}><i className="vi-book is-icon"></i> Aulas</Li>
                                        <Li to={'/forum'}><i className="vi-bubble is-icon"></i> Fórum</Li>
                                        <Li to={'/avaliacoes'}><i className="vi-trophy is-icon"></i> Avaliações</Li>
                                        <Li to={'/convenios'}><i className="vi-box is-icon"></i> Convênios</Li>
                                    </ul>
                                </Panel.Body>
                            </Panel>
                        </div>
                        <div className="col-8">
                            {this.props.children}
                        </div>
                    </div>
                </Container>
            </Page>
        )
    }

}

export default Home
