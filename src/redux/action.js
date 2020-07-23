export default {
  toggleStart: (position) => { return { type: 'toggleStart', position: position } },
  toggleEnd: (position) => { return { type: 'toggleEnd', position: position } },
  toggleWall: (position) => { return { type: 'toggleWall', position: position } },
  resetGrid: () => { return { type: 'resetGrid' } },
  startPath: () => { return { type: 'startPath' } },
  mouseDown: () => { return { type: 'mouseDown' } },
  mouseUp: () => { return { type: 'mouseUp' } }
};