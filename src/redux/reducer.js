const blank = () => {
  const blankGrid = [];
  const size = 15;
  for (let row = 0; row < size; row++) {
    let arr = [];
    for (let col = 0; col < size + 10; col++) {
      const node = {
        row,
        col,
        value: 0,
        visited: false,
        distance: Infinity,
        previous: null
      }
      arr.push(node)
    }
    blankGrid.push(arr)
  };
  return blankGrid
};

const blankClone = (blank) => {
  const clone = [];
  for (let i = 0; i < blank.length; i++) { clone.push(blank[i].slice()) };
  return clone;
};

const updateGrid = (grid, position, value) => {
  const newArr = Object.assign([...grid], {
    [position[0]]: Object.assign([...grid[position[0]]], {
      [position[1]]: {
        ...grid[position[0]][position[1]],
        value: value
      }
    })
  })
  return newArr
};

export default {
  toggleNode: (state = {
    grid: blankClone(blank()),
    newNode: 1,
    mouseDown: false,
    start: null,
    end: null
  }, action) => {
    let position, node, value;
    if (action.position) { position = action.position.split('-') };
    if (action.node) { node = action.node };
    if (action.value) { value = action.value };
    switch (action.type) {
      case 'toggleStart':
        state.grid = updateGrid(state.grid, position, 1);
        state.start = state.grid[position[0]][position[1]];
        state.grid[position[0]][position[1]].distance = 0;
        state.newNode++;
        break;
      case 'toggleEnd':
        state.grid = updateGrid(state.grid, position, 2);
        state.end = state.grid[position[0]][position[1]];
        state.newNode++;
        break;
      case 'toggleWall':
        state.grid = updateGrid(state.grid, position, 3);
        break;
      case 'resetGrid':
        state.grid = blankClone(blank());
        state.newNode = 1
        break;
      case 'mouseDown':
        state.mouseDown = true;
        break;
      case 'mouseUp':
        state.mouseDown = false;
        break;
      case 'dijkstra':
        if (!node.value) {
          position = [node.row, node.col]
          state.grid = updateGrid(state.grid, position, value)
        }
        break;
      default:
        break;
    }
    return state;
  }
};