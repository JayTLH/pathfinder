import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Pathfinder.scss';
import GridNode from './GridNode.js';
import action from '../redux/action.js';

export default function Pathfinder(props) {
  const stateGrid = useSelector(state => state.grid)
  const stateNewNode = useSelector(state => state.newNode)
  const dispatch = useDispatch()
  const mapNodes = () => {
    return (
      stateGrid.map((row, ri) => {
        return (
          <div className="grid-row" key={`r${ri}`}>
            {row.map((col, ci) => {
              return <GridNode key={`${ri}-${ci}`} position={`${ri}-${ci}`} />
            })}
          </div>)
      })
    )
  }
  const instructions = () => {
    switch (stateNewNode) {
      case 1:
        return 'Place the starting point';
      case 2:
        return 'Place the end point';
      case 3:
        return 'Put down any walls you want';
      default:
        break;
    }
  }

  const reset = () => {
    dispatch(action.resetGrid())
  }

  return (
    <div className="pathfinder">
      {mapNodes()}
      <div className="pathfinder__instructions">
        {instructions()}
      </div>
      <div className="pathfinder__control">
        <button className="pathfinder__button">Start</button>
        <button className="pathfinder__button" onClick={reset}>Reset</button>
      </div>
    </div>
  )
};