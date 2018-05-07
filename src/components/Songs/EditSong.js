import React, { Component } from 'react';

export default class EditSong extends Component {
    constructor(props) {
        super(props);
        let element = this.props.elementToEdit;
        this.state = {
            album: element.album,
            value: element.value,
            description: element.description,
            songLength: element.songLength,
        }
    }

    handleSongNameChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    handleLengthChange = (e) => {
        this.setState({
            songLength: e.target.value
        })
    };

    handleSaveChanges = () => {
        this.props.editItem(this.state);
        this.props.handleToggleEditMode(false);
    };

    handleCancel = () => {
        this.props.handleToggleEditMode(false);
    };

    render() {
        return (
            <div className="editSong">
                <div className="editControls">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={this.handleSaveChanges}>
                        Save changes
                    </button>
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={this.handleCancel}>
                        Cancel
                    </button>
                </div>
                <form className="editSongForm">
                    <input type="text"
                           className="form-control"
                           value={this.state.value}
                           onChange={this.handleSongNameChange}
                    />
                    <input type="text"
                           className="form-control"
                           value={this.state.songLength}
                           onChange={this.handleLengthChange}
                    />
                    <textarea value={this.state.description}
                              className="form-control"
                              onChange={this.handleDescriptionChange}
                    />
                </form>
            </div>
        );
    }
}