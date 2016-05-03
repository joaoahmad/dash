import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';
import activeComponent from 'react-router-active-component';

var Item = activeComponent('li');

class NavItem extends React.Component {
	render() {
        return (
			<Item
	            to={this.props.to}
	            linkClassName={this.props.class}>
	                {this.props.label}
            </Item>
        )
    }

}

module.exports = NavItem;
