import React, { Component } from 'react';

export default class AddItemForm extends Component{
    onSubmit = (event) => {
        event.preventDefault();
        let newItemValue = this.refs.itemName.value;
        if(newItemValue) {
            this.props.addItem({newItemValue});
            this.refs.form.reset();
        }
    };

    render() {
        let placeholder = "Add a new " + this.props.target;
        return (
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref="itemName"     className="form-control"
                       placeholder={placeholder}
                />
                <button type="submit" className="btn btn-default">Add</button>
            </form>
        );
    }
}
