import React from 'react';
import classnames from 'react';

export default class NotificationsCount extends React.Component {
    
    constructor() {
      super()
      this.state = this._getCount();
    }
    
    _getCount(){
        return {count: 0};
    }
    
	render() {
        return ( <span className="notifications-count">{this.state.count}</span> )
	}
	
}