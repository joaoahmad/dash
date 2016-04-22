import React from 'react';
import classnames from 'classnames';
import Textarea from './Textarea';

class Input extends React.Component {

    static get Textarea(){ return Textarea; }

    constructor() {
        super();
        this.state = { focus: false };
    }

    componentDidMount(){
        if(this.props.value != "")
        this.setState({ focus: true });
    }

    render() {
        var focus = this.state.focus;
        var classes = classnames({
            'focused': focus,
        });

        return (
          <div className={classes}>
              <label>{this.props.label}</label>
              <input {...this.props} onFocus={this._handleFocus.bind(this)} onBlur={this._handleBlur.bind(this)} placeholder={this.props.label} />
          </div>
        );

        // return (
        //   <div className={classes}>
        //       <label>{this.props.label}</label>
        //       <span className="error">{this.props.errorMsg}</span>
        //       <input {...this.props} onFocus={this._handleFocus.bind(this)} onBlur={this._handleBlur.bind(this)}  />
        //   </div>
        // );
    }

    _handleFocus(event){
        this.setState({focus: true});
    }

    _handleBlur(event){
        this.setState({ focus: (() => (event.target.value.length > 0) ? true : false)() });
    }

}
module.exports = Input;
