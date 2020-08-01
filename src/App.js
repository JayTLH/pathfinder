import React from 'react';
import Pathfinder from './components/Pathfinder.js';
import './App.scss';
import github from './assets/github.png';

export default function App(props) {
  return (
    <div className="app">
      <Pathfinder />
      <a className="link" href="https://github.com/JayTLH/pathfinder" target="_blank" rel="noopener noreferrer">
            <img className="link__icon" src={github} alt="github" />
          </a>
    </div>
  )
};
