import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import activeComponent from 'react-router-active-component';

var Li = activeComponent('li');

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
                    <Li to={'/cursos'}><i className="vi-book is-icon"></i> <span>Cursos</span></Li>
                    <Li to={'/conteudos'}><i className="vi-calendar is-icon"></i> <span>Conteúdos</span></Li>
                    <Li to={'/atividade'}><i className="vi-trophy is-icon"></i> <span>Atividade</span></Li>
                    <Li to={'/users'}><i className="vi-users is-icon"></i> <span>Usuários</span></Li>
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
