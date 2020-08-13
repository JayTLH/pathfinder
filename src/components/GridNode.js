import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import action from '../redux/action.js';
import './GridNode.scss';

export default function GridNode(props) {
  const dispatch = useDispatch();
  const stateGrid = useSelector(state => state.grid);
  const stateNewNode = useSelector(state => state.newNode);
  const mouseDown = useSelector(state => state.mouseDown);
  const position = props.position.split('-');
  const nodeValue = stateGrid[position[0]][position[1]].value

  const nodeClass = (value) => {
    switch (value) {
      case 1:
        return 'node-start';
      case 2:
        return 'node-end';
      case 3:
        return 'node-wall';
      case 4:
        return 'node-visited';
      case 5:
        return 'node-path';
      default:
        break;
    }
  }

  const toggleWall = (event, mouse) => {
    if (!mouseDown) { return };
    if (stateNewNode === 3) { dispatch(action.toggleWall(props.position)) };
  }

  const mouseClick = (event) => {
    if (event.type === 'mousedown') {
      dispatch(action.mouseDown());
      if (event.target.value !== '0') { return }
      if (stateNewNode === 1) {
        dispatch(action.toggleStart(props.position));
      } else if (stateNewNode === 2) {
        dispatch(action.toggleEnd(props.position));
      } else if (stateNewNode === 3) {
        dispatch(action.toggleWall(props.position));
      }
    } else {
      dispatch(action.mouseUp())
    }
  }

  const mapButton = (value) => {
    if (value) {
      return <button
        className={`grid-node ${nodeClass(nodeValue)}`}
        value={nodeValue}
        onMouseDown={mouseClick}
        onMouseUp={mouseClick} />
    }
    return <button
      className={`grid-node ${nodeClass(nodeValue)}`}
      value={nodeValue}
      onMouseDown={mouseClick}
      onMouseEnter={toggleWall}
      onMouseUp={mouseClick} />
  }

  return (
    <>{mapButton(nodeValue)}</>
  )
};
