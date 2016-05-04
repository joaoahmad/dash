import React from 'react';
import classnames from 'classnames';
import Input from './Input';
import Textarea from './Textarea';
import Submit from './Submit';
import Switch from './Switch';
import Row from './Row';

class Form extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
          <form {...this.props} role="form">
              {this.props.children}
          </form>
        );
    }

}

export { Input, Textarea, Submit, Switch, Row }
export default Form
