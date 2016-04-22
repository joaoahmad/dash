var React = require('react');
var Link = require('react-router').Link;
var Dropdown = require('react-simple-dropdown');
var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;

var Messages = React.createClass({
	render: function() {
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
	
});
	
module.exports = Messages;