import React, { Component } from 'react';

export default class SongListItem extends Component {

    onClickEdit = () =>{
        let index = parseInt(this.props.index, 10);
        this.props.handleEditItem(index);
    };

    onClickRemove = () => {
        let index = parseInt(this.props.index, 10);
        this.props.removeItem(index);
    };

    render () {
        return (
            <li className="list-group-item">
                <div >
                    {this.props.item.value}
                    <button
                        type="button"
                        className="edit btn btn-light"
                        onClick={this.onClickEdit}>
                        <i className="fa fa-pencil-square-o"></i>
                    </button>
                    <button
                        type="button"
                        className="edit btn btn-light"
                        onClick={this.onClickRemove}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </li>
        );
    }
}