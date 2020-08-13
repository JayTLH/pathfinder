# Pathfinder
DEMO https://pathfinder-jay.netlify.app/

This is a simple pathfinder application that determines the shortest path between the start node and the end node. By clicking on the grid the first time will place the start node, a second click will place the end node and the last click/drag will place any barriers to make the path more difficult. After placing the nodes, clicking the start button will trigger the pathfinder to activate and display the shortest path.

This app makes use of Redux to manage the state at a global component level.

## Dijkstra's Algorithm
The pathfinder algorithm used to find the shortest path is Dijkstra's algorithm which sorts all visited paths to determine the shortest one and allows for weighted paths to take into account traffic, construction sites or other obstructions.

## Future Updates
1 - A* and other pathfinder algorithms.<br/>
2 - Add weighted path node placement.<br/>