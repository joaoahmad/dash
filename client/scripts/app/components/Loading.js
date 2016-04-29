import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';

export default class Loading extends React.Component {

    render() {

        var classes = classnames('loading', 'loading-spin');

        var loading = (
            <div style={{textAlign: 'center',margin: '20px 0'}} className="loading-wrapper">
              <div className={classes}></div>
            </div>
        );

        return (this.props.isFetching) ? loading : this.props.children ;
    }

}
