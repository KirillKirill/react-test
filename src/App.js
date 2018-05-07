import React, { Component } from 'react';
import CatalogApp from './components/CatalogApp';
import JSONdate from './data.json';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <CatalogApp initItems={JSONdate}/>
            </div>
        );
    }
}

