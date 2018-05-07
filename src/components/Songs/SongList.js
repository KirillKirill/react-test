import React, { Component } from 'react';
import SongListItem from './SongListItem';

export default class SongList extends Component{
    render() {
        const filterText = this.props.filterText;
        const album = this.props.album;
        let items = [];

        this.props.items.forEach((item, index) => {
            if (item.value.indexOf(filterText) === -1) {
                return;
            }
            if (item.album !== album) {
                return;
            }
            items.push(
                <SongListItem key={index} item={item} index={index}
                              removeItem={this.props.removeItem}
                              handleEditItem={this.props.handleEditItem}
                />
            );
        });

        return (
            <ul className="list-group"> {items} </ul>
        );
    }
}