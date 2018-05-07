import React, { Component } from 'react';
import SingleAlbum from './SingleAlbum';

export default class AlbumListItem extends Component {

    render () {
        return (
            <div>
                <SingleAlbum
                    item={this.props.item} index={this.props.index}
                    removeItem={this.props.removeItem}
                    editAlbum={this.props.editAlbum}
                    handleChooseAlbum={this.props.handleChooseAlbum}
                    editMode={this.props.editMode}
                />
            </div>
        );
    }
}