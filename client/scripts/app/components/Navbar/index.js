import React from 'react'
import { Link } from 'react-router';
// import Nav from '../Nav'
// import Notifies from './Notifies'
// import Messages from './Messages'
// import User from './User'
// import Search from './Search'

var Navbar = React.createClass({

	render: function() {

        var menuItems = [
            { route: "cursos", text: "Cursos" },
            { route: "conteudos", text: "Conteúdos" },
            { route: "atividade", text: "Atividade" },
            { route: "usuarios", text: "Usuários" },
        ]

		return (
			<nav className='navbar'>
                <div className="container-fluid">
                    <div className="u-pull-left">
                        <Link className="logo" to="/home"></Link>
                        <ul className="nav nav--inline">
                        </ul>
                    </div>
                    <div className="u-pull-right">
                        <ul className="nav nav--inline">
                        </ul>
                    </div>
                </div>
            </nav>
		);
		// return (
		// 	<nav className='navbar'>
        //         <div className="container-fluid">
        //             <div className="u-pull-left">
        //                 <Link className="logo" to="/home"></Link>
        //                 <ul className="nav nav--inline">
        //                     <li style={{marginTop:0}}><Search /></li>
        //                 </ul>
        //             </div>
        //             <div className="u-pull-right">
        //                 <ul className="nav nav--inline">
        //                     <li><Notifies /></li>
        //                     <li><User /></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
		// );
	}

});

module.exports = Navbar;
