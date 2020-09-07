import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Pathfinder.scss';
import GridNode from './GridNode.js';
import action from '../redux/action.js';
import { dijkstra, shortestPath } from '../algorithm/dijkstra.js';

export default function Pathfinder(props) {
  const stateGrid = useSelector(state => state.grid);
  const stateNewNode = useSelector(state => state.newNode);
  const startNode = useSelector(state => state.start);
  const endNode = useSelector(state => state.end);
  const dispatch = useDispatch();

  const mapNodes = () => {
    return (
      stateGrid.map((row, ri) => {
        return (
          <div className="pathfinder__grid-row" key={`r${ri}`}>
            {row.map((col, ci) => {
              return <GridNode key={`${ri}-${ci}`} position={`${ri}-${ci}`} />
            })}
          </div>)
      })
    );
  };

  const instructions = () => {
    switch (stateNewNode) {
      case 1:
        return 'Click on the grid to place a starting point';
      case 2:
        return 'Click again to place the end point';
      case 3:
        return 'Click and drag to put down any walls you want and then start the Pathfinder.';
      default:
        break;
    };
  };

  const start = () => {
    if (!startNode && !endNode) return;
    let i = 0;
    dijkstra(stateGrid, startNode, endNode);
    const shortest = shortestPath(endNode);
    for (let node of shortest) {
      i++;
      delay(node, 5, i);
    };
  };

  const visualize = () => {
    if (!startNode && !endNode) return;
    let i = 0;
    const visited = dijkstra(stateGrid, startNode, endNode);
    for (let node of visited) {
      i++;
      delay(node, 4, i);
    };
    const shortest = shortestPath(endNode);
    for (let node of shortest) {
      i++;
      delay(node, 5, i);
    };
  };

  const delay = (node, value, i) => setTimeout(() => dispatch(action.dijkstra(node, value)), 70 * i);

  const reset = () => dispatch(action.resetGrid());

  return (
    <div className="pathfinder">
      {mapNodes()}
      <div className="pathfinder__instructions">
        {instructions()}
      </div>
      <div className="pathfinder__control">
        <button className="pathfinder__button" onClick={start}>Start</button>
        <button className="pathfinder__button" onClick={visualize}>Visualize</button>
        <button className="pathfinder__button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};