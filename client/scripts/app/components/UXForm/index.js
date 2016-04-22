import React from 'react';
import classnames from 'classnames';
import Input from './Input';
import Textarea from './Textarea';
import Submit from './Submit';
import Switch from './Switch';

class Form extends React.Component {

    static get Input(){ return Input; }
    static get Textarea(){ return Textarea; }
    static get Submit(){ return Submit; }
    static get Switch(){ return Switch; }

    constructor() {
        super();
    }

    render() {
        var focus = this.state.focus;
        var classes = classnames({
            'focused': focus,
        });

        return (
          <form {...this.props} role="form">
              {this.props.children}
          </form>
        );
    }

}
module.exports = Form;
