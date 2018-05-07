import React, { Component } from 'react';
import SongList from './SongList';
import EditSong from './EditSong';
import AddItemForm from './../AddItemForm';
import JSONdate from './../../data.json';

export default class Songs extends Component{
    constructor(props) {
        super(props);

        this.state = {
            songList: JSONdate.songs,
            elementToEditIndex : undefined
        }
    }

    addItem = (songItem) => {
        JSONdate.songs.push({
            album: this.props.album,
            value: songItem.newItemValue,
            description: 'Description',
            songLength: 'length'
        });

        this.setState({ songList: JSONdate.songs });
    };

    removeItem = (itemIndex) => {
        JSONdate.songs.splice(itemIndex, 1);
        this.setState({ songList: JSONdate.songs });
    };

    editItem = (editedSong) => {
        JSONdate.songs.splice(this.state.elementToEditIndex, 1, editedSong);
        this.setState({ songList: JSONdate.songs });
    };

    handleEditItem = (itemIndex) => {
        this.setState({ elementToEditIndex: itemIndex });
        this.props.handleToggleEditMode(true);
    };

     render() {
        if (!this.props.editMode) {
            return (
                <div className="songs">
                    <AddItemForm addItem={this.addItem} target={'Song'}/>
                    <br />
                    <SongList items={this.props.items}
                              filterText={this.props.filterText}
                              album={this.props.album}
                              removeItem={this.removeItem}
                              handleEditItem={this.handleEditItem}
                    />
                </div>
            )
        } else {
            return (
                <EditSong editItem={this.editItem}
                          elementToEdit={this.state.songList[this.state.elementToEditIndex]}
                          handleToggleEditMode={this.props.handleToggleEditMode}
                />
            );
        }
    }
}