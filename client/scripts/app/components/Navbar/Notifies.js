import React from 'react'
import { Link } from 'react-router'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

class Messages extends React.Component{
	render() {
		return (
            <Dropdown className="dropdown-notifies">
                <DropdownTrigger><i className="vi-bell is-icon"></i></DropdownTrigger>
                <DropdownContent className="dropside">
                    <div className="dropside-in">
                        <h3 className="title u-text-center">Notifications</h3>
                    </div>
                </DropdownContent>
            </Dropdown>
		);
	}

};

export default Messages
