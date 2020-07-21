export default { 
  toggleStart: (position) => {
    return { type: 'toggleStart', position: position };
  }, 
  toggleEnd: (position) => {
    return { type: 'toggleEnd', position: position };
  },
  toggleWall: (position) => {
    return { type: 'toggleWall', position: position };
  },
  startPath: () => {
    return {type: 'startPath'};
  },
  resetGrid: () => {
    return {type: 'resetGrid'};
  }
};