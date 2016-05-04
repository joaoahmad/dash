import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import Content from '../../components/Content';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div id="layout" ref="layout">
                <Navbar ref="navbar" />
                <Sidebar ref="sidebar" />
                <Content ref="content" >
                    {this.props.children}
                </Content>
            </div>
        )
    }

}

export default App
