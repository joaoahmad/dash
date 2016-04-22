var React = require('react');
var Link = require('react-router').Link;

class UXTableBody extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (
          <div className="uxtable-body">
                {this.props.children}
          </div>
        );
    }

}

module.exports = UXTableBody;
