import React from 'react';
import { Route, RouteHandler, Link, Lifecycle } from 'react-router';
// import history from '../../history';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
// import LoginActions from '../../actions/LoginActions';

class User extends React.Component {

	constructor() {
      super();
    }

	logout(e){
		e.preventDefault();
		// LoginActions.logoutUser();
	}

	render() {
		return (
            <Dropdown className="dropdown-user">
                <DropdownTrigger>
                    <div className="user">
                        <span className="user-avatar">
                            <img src="/assets/images/photo.jpg" />
                        </span>
                        <i className="fa fa-angle-down"></i>
                    </div>
                </DropdownTrigger>
                <DropdownContent>
                    <div className="dropdown-box">
                        <ul className="nav">
                            <li>
                                <a href="/profile">Profile</a>
                            </li>
                            <li>
                                <a href="/favorites">Favorites</a>
                            </li>
                            <li>
                                <a href="/logout" onClick={this.logout.bind(this)}>Log Out</a>
                            </li>
                        </ul>
                    </div>
                </DropdownContent>
            </Dropdown>
		);

//        return (
//            <Dropdown className="dropdown-user" icon="vi-user">
//                hey
//            </Dropdown>
//		);
	}

}

module.exports = User;
