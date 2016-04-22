import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
// import activeComponent from 'react-router-active-component';

// var li = activeComponent('li');

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classes = classnames({
            'sidebar': true
        });

        return (
            <div className={classes} ref="sidebar">
                <ul className="nav">
                    <li to="/cursos"><Link to="/"><i className="vi-book is-icon"></i> <span>Cursos</span></Link></li>
                    <li to="/conteudos"><Link to="/"><i className="vi-calendar is-icon"></i> <span>Conteúdos</span></Link></li>
                    <li to="/atividade"><Link to="/"><i className="vi-trophy is-icon"></i> <span>Atividade</span></Link></li>
                    <li to="/usuarios"><Link to="/"><i className="vi-users is-icon"></i> <span>Usuários</span></Link></li>
                </ul>
                <hr className="separator" />
            <ul className="nav nav-sub">
                    <li><Link to="/">Reportar erro</Link></li>
                    <li><Link to="/">Ajuda</Link></li>
                </ul>
            </div>
        );
    }

}

module.exports = Sidebar;
