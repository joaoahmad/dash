import React from 'react'

import Header from './UXTableHeader';
import Body from './UXTableBody';
import Item from './UXTableItem';
import ItemActions from './UXTableItemActions';
import ItemContent from './UXTableItemContent';
import ItemPicture from './UXTableItemPicture';

class Table extends React.Component {

    static get Header(){ return Header }
    static get Body(){ return Body }
    static get Item(){ return Item }
    static get ItemActions(){ return ItemActions }
    static get ItemContent(){ return ItemContent }
    static get ItemPicture(){ return ItemPicture }

    constructor(props) {
        super(props);
    }

    render(){

        return (
          <div className="uxtable">
                {this.props.children}
          </div>
        );
    }

}

module.exports = Table;
