import React, { Component } from 'react';

export default class SingleAlbum extends Component {

    handleRemoveAlbum = (e) => {
        e.stopPropagation();
        let index = parseInt(this.props.index, 10);
        this.props.removeItem(index);
    };

    handleEditAlbum = (e) => {
        e.stopPropagation();
        let index = parseInt(this.props.index, 10);
        this.props.editAlbum(index);
    };

    handleChooseAlbum = (e) => {
        e.stopPropagation();
        let index = parseInt(this.props.index, 10);
        this.props.handleChooseAlbum(index);
    };

    render() {
        return(
            <li className="list-group-item singleAlbum"  onClick={this.handleChooseAlbum}>
                <div className="albumItem">
                    {this.props.item.value}
                    { !this.props.editMode &&
                    <button
                        type="button"
                        onClick={this.handleEditAlbum}>
                        <i className="fa fa-pencil-square-o"></i>
                    </button>
                    }
                </div>
                <div className="albumControls">
                    { !this.props.editMode &&
                    <button
                        type="button"
                        className="RemoveAlbum"
                        onClick={this.handleRemoveAlbum}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    }
                </div>
            </li>
        );
    }
}