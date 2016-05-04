import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { uiSubpageMount, uiSubpageUnmount } from '../../actions/ui-page'

class PageSubpage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const { dispatch } = this.props
        dispatch(uiSubpageMount())
    }

    componentWillUnmount(){
        const { dispatch } = this.props
        dispatch(uiSubpageUnmount())
    }

    render() {
        return (
            <div ref="subpage" className='page__subpage'>
                {this.props.children}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return Object.assign({ subpage: true }, state.uiPage)
}

export default connect(mapStateToProps)(PageSubpage)
