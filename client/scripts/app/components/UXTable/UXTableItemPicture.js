var React = require('react');
var _ = require('lodash');
var Link = require('react-router').Link;

class UXTableItemPicture extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

      var style = {
        display: 'block',
        width: 50,
        height: 50,
        backgroundImage: 'linear-gradient(135deg,#70929c,#846170)'
      }

      if(typeof(this.props.image) !== 'undefined')
        this.props.style.backgroundImage = 'url(' + this.props.image + ')';

      return (
        <div className="uxtable-item-picture">
          <span className="uxtable-item-picture--img" style={_.merge(style, this.props.style)} />
        </div>
      );
    }

}

UXTableItemPicture.defaultProps = {
}

module.exports = UXTableItemPicture;
