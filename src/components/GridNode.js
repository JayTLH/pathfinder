import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import action from '../redux/action.js';
import './GridNode.scss';

export default function GridNode(props) {
  const dispatch = useDispatch();
  const stateGrid = useSelector(state => state.grid);
  const stateNewNode = useSelector(state => state.newNode);
  const position = props.position.split('-');
  const nodeValue = stateGrid[position[0]][position[1]]

  const nodeClass = (value) => {
    switch (value) {
      case 1:
        return 'node-start';
      case 2:
        return 'node-end';
      case 3:
        return 'node-wall';
      default:
        break;
    }
  }

  const toggle = (event) => {
    switch (stateNewNode) {
      case 1:
        dispatch(action.toggleStart(props.position));
        break;
      case 2:
        dispatch(action.toggleEnd(props.position));
        break;
      case 3:
        dispatch(action.toggleWall(props.position));
        break;
      default:
        break;
    }
  }

  const createWall = (event) => {
    console.log(event.type)
  }

  const mapButton = (value) => {
    if (value) { return <button className={`grid-node ${nodeClass(nodeValue)}`} value={nodeValue} /> }
    return <button className={`grid-node ${nodeClass(nodeValue)}`} value={nodeValue} onMouseOver={toggle} />
    // return <button className={`grid-node ${nodeClass(nodeValue)}`} value={nodeValue} onMouseDown={toggle} onMouseOver={toggle} />
  }

  return (
    <>{mapButton(nodeValue)}</>
  )
};
