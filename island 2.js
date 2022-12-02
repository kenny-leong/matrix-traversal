function getVal (row, col, graph) {
  let arr = graph[row];
  let val = arr[col];
  return val;
}

function getNeighbors(row, col, matrix) {

  let neighbors = [];

  // Check top
  let topCoord = [];
  if (row - 1 >= 0 && getVal(row-1, col, matrix) == 1) {
    topCoord.push(row - 1);
    topCoord.push(col)
    neighbors.push(topCoord);
  }

  // Check top right
  let topRightCoord = [];
  if (row - 1 >= 0 && col + 1 < matrix[0].length && getVal(row - 1, col +1, matrix) == 1) {
    topRightCoord.push(row - 1);
    topRightCoord.push(col + 1);
    neighbors.push(topRightCoord);
  }



  // Check right
  let rightCoord = [];
  if (col + 1 < matrix[0].length && getVal(row, col+1, matrix) == 1) {
    rightCoord.push(row);
    rightCoord.push(col + 1);
    neighbors.push(rightCoord);
  }


  // Check bottom right
  let bottomRightCoord = [];
  if (row + 1 < matrix.length && col + 1 < matrix[0].length && getVal(row+1, col+1, matrix) == 1) {
    bottomRightCoord.push(row + 1);
    bottomRightCoord.push(col + 1);
    neighbors.push(bottomRightCoord);
  }


  // Check bottom
  let bottomCoord = [];
  if (row + 1 < matrix.length && getVal(row+1, col, matrix) == 1) {
    bottomCoord.push(row + 1);
    bottomCoord.push(col);
    neighbors.push(bottomCoord);
  }


  // Check bottom left
  let bottomLeftCoord = [];
  if (row + 1 < matrix.length && col - 1 >= 0 && getVal(row+1, col-1, matrix) == 1) {
    bottomLeftCoord.push(row + 1);
    bottomLeftCoord.push(col - 1);
    neighbors.push(bottomLeftCoord);
  }


  // Check left
  let leftCoord = [];
  if (col - 1 >=0 && getVal(row, col-1, matrix) == 1) {
    leftCoord.push(row);
    leftCoord.push(col - 1);
    neighbors.push(leftCoord);
  }


  // Check top left
  let topLeftCoord = [];
  if (row - 1 >= 0 && col - 1 >= 0 && getVal(row-1,col-1, matrix) == 1) {
    topLeftCoord.push(row - 1);
    topLeftCoord.push(col - 1);
    neighbors.push(topLeftCoord);
  }


  // Return neighbors
  return neighbors;

}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  let visited = new Set();

  // Initialize count to 0
  let count = 0;


  // Iterate through all indices in matrix
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[i].length; j++) {
      let coordinate = [i, j]
      let strVal = coordinate.toString();
      // If an index contains a 1 and has not been visited,
      if (matrix[i][j] == 1 && !visited.has(strVal)) {

        // increment island count and start traversing neighbors

        // DO THE THING (increment island count by 1)
        count++;

        // Initialize a stack with current index
        const queue = [coordinate];

        // Add stringified version of current index to the visited set
        visited.add(strVal);

        // While stack contains elements
        while (queue.length) {

          // Pop element from stack
          let current = queue.pop();

          // Get valid neighbors of current element
          let neighbors = getNeighbors(current[0], current[1], matrix);

          // Iterate over neigbors
          neighbors.forEach(element => {
            let str = element.toString();

            // If neighbor has not been visited
            if (!visited.has(str)) {

              // Add neighbor to stack
              queue.push(element);

              // Mark neighbor as visited
              visited.add(str);
            }
          });
        }
      }
    }
  }
  // Return island count
  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
