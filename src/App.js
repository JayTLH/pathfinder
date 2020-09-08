import React from 'react';
import { useDispatch } from 'react-redux';
import action from './redux/action.js';
import Pathfinder from './components/Pathfinder.js';
import './App.scss';
import github from './assets/github.png';
import logo from './assets/logo.png';

export default function App(props) {
  const dispatch = useDispatch();

  const mouseClick = (event) => {
    if (event.type === 'mouseup') dispatch(action.mouseUp());
  }

  return (
    <div className="app" onMouseUp={mouseClick}>
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
