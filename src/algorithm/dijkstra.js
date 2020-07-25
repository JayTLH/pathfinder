export function dijkstra(grid, start, end) {
  const path = [];
  start.distance = 0;
  const unvisited = getNodes(grid);
  while (!!unvisited.length) {
    sortNodes(unvisited);
    const nextNode = unvisited.shift();
    if (nextNode.value === 3) { continue }; // checks for walls
    nextNode.visited = true;
    path.push(nextNode)
    if (nextNode === end) { return path };
    updateNextNodes(grid, nextNode)
  };
};

const getNodes = (grid) => {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
};

const sortNodes = (unvisited) => { unvisited.sort((a, b) => a.distance - b.distance) };

const nextNodes = (grid, node) => {
  const next = [];
  const { row, col } = node;
  if (row > 0) { next.push(grid[row - 1][col]) };
  if (row < grid.length - 1) { next.push(grid[row + 1][col]) };
  if (col > 0) { next.push(grid[row][col - 1]) };
  if (col < grid[0].length - 1) { next.push(grid[row][col + 1]) };
  return next.filter(node => !node.visited);
};

const updateNextNodes = (grid, node) => {
  const unvisited = nextNodes(grid, node);
  for (const next of unvisited) {
    next.distance = node.distance + 1;
    next.previous = node;
  }
};

export function shortestPath(end) {
  const path = [];
  let curNode = end;
  while (curNode !== null) {
    path.unshift(curNode);
    curNode = curNode.previous;
  }
  return path;
};