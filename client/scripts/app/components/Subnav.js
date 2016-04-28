import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router'

class Subnav extends React.Component{

    render() {

        const { title, menuItems, menuActions } = this.props

        return (
            <nav className='subnav'>
                <div className="container">
                    <div className="_pull-left">
                        {title && <h1 className="title">{title}</h1>}
                    </div>
                    <div className="_pull-right">
                        {menuItems && <Nav items={menuItems}/>}
                    </div>
                </div>
            </nav>
        );
    }

}

export default Subnav;
