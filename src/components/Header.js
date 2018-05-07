import React, { Component } from 'react';

export default class Header extends Component {
    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value)
    };

    render() {
        return (
            <form className="searchBar form-inline">
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                    className="form-control"
                />
            </form>
        );
    }
}