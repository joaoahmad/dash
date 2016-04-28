import React from 'react'
import { Link } from 'react-router';
import Nav from '../Nav'
import Notifies from './Notifies'
import Messages from './Messages'
import User from './User'
import Search from './Search'

class Navbar extends React.Component{

	render() {

        var menuItems = [
            { route: "cursos", text: "Cursos" },
            { route: "conteudos", text: "Conteúdos" },
            { route: "atividade", text: "Atividade" },
            { route: "usuarios", text: "Usuários" },
        ]

		// return (
		// 	<nav className='navbar'>
        //         <div className="container-fluid">
        //             <div className="_pull-left">
        //                 <Link className="logo" to="/home"></Link>
        //                 <ul className="nav nav--inline">
        //                 </ul>
        //             </div>
        //             <div className="_pull-right">
        //                 <ul className="nav nav--inline">
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
		// );
		return (
			<nav className='navbar'>
                <div className="container-fluid">
                    <div className="_pull-left">
                        <Link className="logo" to="/home"></Link>
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
