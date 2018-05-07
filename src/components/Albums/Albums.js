import React, { Component } from 'react';
import AddItemForm from './../AddItemForm';
import AlbumList from './AlbumList';
import JSONdate from './../../data.json';

export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albumList: JSONdate.albums,
            elementToEditIndex : undefined
        }
    }

    addAlbum = (albumItem) => {
        JSONdate.albums.push({
            value: albumItem.newItemValue,
        });

        this.setState({ albumList: JSONdate.albums });
    };

    removeAlbum = (itemIndex) => {
        JSONdate.albums.splice(itemIndex, 1);
        this.setState({ albumList: JSONdate.albums });
    };

    editAlbum = (itemIndex) => {
        let newName  = prompt('Enter the name of the Category', JSONdate.albums[itemIndex].value);
        if (newName) {
            JSONdate.albums[itemIndex].value = newName;
            this.setState({ albumList: JSONdate.albums });
        }
    };

    handleChooseAlbum = (value) => {
        (typeof value === 'number') ?
            this.props.handleChooseAlbum(JSONdate.albums[value].value) :
            this.props.handleChooseAlbum(value);
    };

    render() {
        return (
                <div className="albums">
                    { !this.props.editMode &&
                    <AddItemForm addItem={this.addAlbum} target={'Album'}/>
                    }
                    <br />
                    <AlbumList items={this.props.items}
                                  removeItem={this.removeAlbum}
                                  editAlbum={this.editAlbum}
                                  handleChooseAlbum={this.handleChooseAlbum}
                                  editMode={this.props.editMode}
                    />
                </div>
        )

    }
}