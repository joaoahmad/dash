import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';
// import createActiveRouteComponent from './helpers/ActiveRoute';

var Item = createActiveRouteComponent('li');

class NavItem extends React.Component {
	render() {
        return (
			<Item
	            to={this.props.to}
	            linkClassName={this.props.class}>
	                {this.props.text}
            </Item>
        )
    }

}

module.exports = NavItem;
