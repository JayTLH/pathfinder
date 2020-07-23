const blank = [];
const size = 18;
for (let i = 0; i < size; i++) {
  let row = [];
  for (let j = 0; j < size; j++) {
    row.push(0)
  }
  blank.push(row)
};

const blankClone = (blank) => {
  const clone = [];
  for (let i = 0; i < blank.length; i++) { clone.push(blank[i].slice()) };
  return clone;
};

const changeArr = (grid, position, value) => {
  const newArr = Object.assign([...grid], {
    [position[0]]: Object.assign([...grid[position[0]]], {
      [position[1]]: value
    })
  })
  return newArr
};

export default {
  toggleNode: (state = { grid: blankClone(blank), newNode: 1, mouseDown: false }, action) => {
    let position;
    if (action.position) { position = action.position.split('-') };
    switch (action.type) {
      case 'toggleStart':
        state.grid = changeArr(state.grid, position, 1);
        state.newNode++;
        break;
      case 'toggleEnd':
        state.grid = changeArr(state.grid, position, 2);
        state.newNode++;
        break;
      case 'toggleWall':
        state.grid = changeArr(state.grid, position, 3);
        break;
      case 'resetGrid':
        state.grid = blankClone(blank);
        state.newNode = 1
        break;
      case 'mouseDown':
        state.mouseDown = true;
        break;
      case 'mouseUp':
        state.mouseDown = false;
        break;
      default:
        break;
    }
    return state;
  }
};