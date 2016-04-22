var React = require('react');
var Link = require('react-router').Link;
var Dropdown = require('react-simple-dropdown');
var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;
//var NotificationsCount = require('../NotificationsCount');
//<NotificationsCount />

var Messages = React.createClass({
	render: function() {
		return (
            <Dropdown className="dropdown-messsages">
                <DropdownTrigger><i className="vi-bubble is-icon"></i></DropdownTrigger>
                <DropdownContent>
                    <div className="dropdown-box">
                        ...
                    </div>
                </DropdownContent>
            </Dropdown>
		);
	}
	
});
	
module.exports = Messages;