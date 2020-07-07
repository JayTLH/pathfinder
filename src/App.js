import React, { Component } from 'react';
import './App.scss';
import Pathfinder from './components/Pathfinder.js';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Pathfinder />
      </div>
    )
  }
};
