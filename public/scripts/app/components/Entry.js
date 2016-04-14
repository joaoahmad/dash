import React from 'react';
import { connect } from 'react-redux'

import { addEntry } from '../actions/entries'

class Entry extends React.Component{
    constructor(){
        super()
        this._addEntry = this._addEntry.bind(this)
    }

    componentDidMount(){
    }

    _addEntry(){
        console.log('add', this.input.value);
        addEntry(this.input.value);
    }

    render(){
        return (
            <div>
                <h2>Listen!</h2>
                <input ref={ node => this.input = node} placeholder='Cliente' />
                <button onClick={this._addEntry}>Enviar</button>
            </div>
        )
    }

}
// Entry = connect()(Entry)

export default Entry
