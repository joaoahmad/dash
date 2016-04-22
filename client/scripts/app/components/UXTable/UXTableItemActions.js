var React = require('react');
var Link = require('react-router').Link;

class UXTableItemActions extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (
          <div className="uxtable-item-actions">
                {this.props.children}
          </div>
        );
    }

}

module.exports = UXTableItemActions;
