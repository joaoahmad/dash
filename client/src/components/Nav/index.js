import React from 'react';
import NavItem from './NavItem';

class Nav extends React.Component {
	render() {
        this.itemElement = function(item, ref) {
            return (
                <NavItem {...item} ref={ref} key={ref}/>
            );
        }
        const items = this.props.items.map((item, index) => this.itemElement(item, `i${index}`));
		let classes = this.props.className || "nav nav--inline";
		return (
			<ul className={classes}>
                {items}
            </ul>
		);
	}

}

module.exports = Nav;
