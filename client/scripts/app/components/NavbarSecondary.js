var React = require('react');
var Nav = require('./Nav');
var Link = require('react-router').Link;

var NavbarSecondary = React.createClass({

	render: function() {

    var menuRight = this.getRight();
    var menuLeft = this.getLeft();

    return (
      <nav className='navbar-secondary'>
        <div className="container">
          <div className="u-pull-left">
              {menuLeft}
          </div>
          {menuRight}
        </div>
      </nav>
		);
	},

  getLeft(){
    if(this.props.menuItems){
      return (
        <Nav items={this.props.menuItems}/>
      )
    }else if(this.props.menuTitle){
      return (
        <Link to={this.props.menuTitle.path}>
          <h1 className="title">{this.props.menuTitle.text}</h1>
        </Link>
      )
    }
  },

  getRight(){
        if (this.props.menuActions){
            return (
                <div className="u-pull-right actions">
                    {this.props.menuActions}
                </div>
            )
        }
    }

});

module.exports = NavbarSecondary;
