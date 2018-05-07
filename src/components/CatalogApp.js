import React, { Component } from 'react';
import Header from './Header';
import Songs from './Songs/Songs';
import Albums from './Albums/Albums';

export default class CatalogApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            album: '',
            editMode: false,
        };
    }

    handleFilterTextChange = (filterText) => {
        this.setState({
            filterText: filterText
        });
    };

    handleChooseAlbum = (albumName) => {
        this.setState({
            album: albumName
        })
    };

    handleToggleEditMode = (editMode) => {
        this.setState({
            editMode: editMode
        })
    };

    render() {
        return (
            <div id="main">
                <header>
                    <h1 className="catalogHeader">Music Catalog</h1>
                    { !this.state.editMode &&
                    <Header
                        filterText={this.state.filterText}
                        album={this.state.album}
                        onFilterTextChange={this.handleFilterTextChange}
                    />
                    }
                </header>
                <main>
                    <Albums
                        items={this.props.initItems.albums}
                        handleChooseAlbum={this.handleChooseAlbum}
                        editMode={this.state.editMode}
                        handleToggleEditMode={this.handleToggleEditMode}
                    />
                    <Songs
                        items={this.props.initItems.songs}
                        filterText={this.state.filterText}
                        album={this.state.album}
                        editMode={this.state.editMode}
                        handleToggleEditMode={this.handleToggleEditMode}
                    />
                </main>
            </div>
        );
    }
}
