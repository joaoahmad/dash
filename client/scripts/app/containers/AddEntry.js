import React from 'react';
import { connect } from 'react-redux'
import { addEntry } from '../actions/entries'

class AddEntry extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return (
            <div>
            <h2>Listen!</h2>
            <input ref={ node => this.input = node} placeholder='Cliente' />
            <button onClick={() => {
                this.props.dispatch(addEntry(this.input.value))
                this.input.value = ''
             }}>Enviar</button>
            </div>
        )
    }

}
AddEntry = connect()(AddEntry)

export default AddEntry
