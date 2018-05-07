import React, { Component } from 'react';
import AlbumListItem from './AlbumListItem';

export default class AlbumList extends Component {
    render() {
        let items = this.props.items.map((item, index) => {
            return (
                <AlbumListItem    key={index} item={item} index={index}
                                  removeItem={this.props.removeItem}
                                  editAlbum={this.props.editAlbum}
                                  handleChooseAlbum={this.props.handleChooseAlbum}
                                  editMode={this.props.editMode}
                />
            );
        });

        return (
            <ul className="list-group" id="category-list"> {items} </ul>
        );
    }
}