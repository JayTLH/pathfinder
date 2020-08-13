import React from 'react';
import Pathfinder from './components/Pathfinder.js';
import './App.scss';
import github from './assets/github.png';
import logo from './assets/logo.png';

export default function App(props) {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title">PATHFINDER</h1>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <Pathfinder />
      <a className="link" href="https://github.com/JayTLH/pathfinder" target="_blank" rel="noopener noreferrer">
        <img className="link__icon" src={github} alt="github" />
      </a>
    </div>
  )
};
