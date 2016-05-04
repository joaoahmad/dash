import React from 'react';
import classnames from 'classnames';

class Textarea extends React.Component {

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
                <textarea {...this.props} onFocus={this._handleFocus.bind(this)} onBlur={this._handleBlur.bind(this)} />
          </div>
        );
        // return (
        //   <div className={classes}>
        //         <label>{this.props.label}</label>
        //         <span className="error">{this.props.errorMsg}</span>
        //         <textarea {...this.props} onFocus={this._handleFocus.bind(this)} onBlur={this._handleBlur.bind(this)} />
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
module.exports = Textarea;
