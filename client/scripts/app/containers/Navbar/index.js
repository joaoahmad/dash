import React from 'react'
import { Link } from 'react-router';
import Nav from '../../components/Nav'
import Notifies from './Notifies'
import Messages from './Messages'
import User from './User'
import Search from './Search'

import './styles/index.sass'

class Navbar extends React.Component{

	render() {

		return (
			<nav className='navbar'>
                <div className="container-fluid">
                    <div className="_pull-left">
                        <Link className="brand" to="/home">Dash Jest</Link>
                    </div>
                    <div className="_pull-right">
						<Search />
                        <ul className="nav nav--inline">
                            <li><Notifies /></li>
                            <li><User /></li>
                        </ul>
                    </div>
                </div>
            </nav>
		);
	}

}

export default Navbar;
