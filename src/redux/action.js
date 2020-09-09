export default {
  toggleStart: (position) => { return { type: 'toggleStart', position: position } },
  toggleEnd: (position) => { return { type: 'toggleEnd', position: position } },
  toggleWall: (position) => { return { type: 'toggleWall', position: position } },
  resetGrid: () => { return { type: 'resetGrid' } },
  mouseDown: () => { return { type: 'mouseDown' } },
  mouseUp: () => { return { type: 'mouseUp' } },
  inProgress: () => { return { type: 'inProgress' } },
  alertModal: (msg) => { return { type: 'alertModal', value: msg } },
  dijkstra: (node, value) => { return { type: 'dijkstra', node: node, value: value } }
};