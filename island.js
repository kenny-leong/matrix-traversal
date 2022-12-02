function getVal (row, col, graph) {
  let arr = graph[row];
  let val = arr[col];
  return val;
}

function getNeighbors(row, col, graph) {

  let neighbors = [];

  // Check top
  let topCoord = [];
  if (row - 1 >= 0 && getVal(row-1, col, graph) == 1) {
    topCoord.push(row - 1);
    topCoord.push(col)
    neighbors.push(topCoord);
  }

  // Check bottom
  let bottomCoord = [];
  if (row + 1 < graph.length && getVal(row+1, col, graph) == 1) {
    bottomCoord.push(row + 1);
    bottomCoord.push(col);
    neighbors.push(bottomCoord);
  }

  // Check left
  let leftCoord = [];
  if (col - 1 >=0 && getVal(row, col-1, graph) == 1) {
    leftCoord.push(row);
    leftCoord.push(col - 1);
    neighbors.push(leftCoord);
  }

  // Check right
  let rightCoord = [];
  if (col + 1 < graph[0].length && getVal(row, col+1, graph) == 1) {
    rightCoord.push(row);
    rightCoord.push(col + 1);
    neighbors.push(rightCoord);
  }

  // Return neighbors
  return neighbors
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();

  // Create a stack, put the starting node in the stack
  let coordinate = [row, col];
  const queue = [coordinate];

  // Put the stringified starting node in visited
  visited.add(coordinate.toString());

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (queue.length) {

    // Pop the first node
    let currentCoord = queue.pop();

    // DO THE THING (increment size by 1)
    size++;

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

    let neighbors = getNeighbors(currentCoord[0], currentCoord[1], graph);

    neighbors.forEach(element => {
      let strVal = element.toString();
      if (!visited.has(strVal)) {
        visited.add(strVal);
        queue.push(element);
      }
    });
  }
  // return size
  return size;
}

module.exports = [getNeighbors, islandSize];
