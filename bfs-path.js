function findNeighbors(node, matrix) {

    let neighbors = []; //arr of neighbor coordinates

    // Up
    let aboveValCoord = [];
    let aboveRowCoord;
    let aboveColCoord;
    if (matrix[node[0] - 1]) {
        aboveRowCoord = node[0] - 1;
        aboveColCoord = node[1];
        aboveValCoord.push(aboveRowCoord);
        aboveValCoord.push(aboveColCoord);
        neighbors.push(aboveValCoord);
    }


    // Down
    let belowValCoord = [];
    let belowRowCoord;
    let belowColCoord;
    if (matrix[node[0] + 1]) {
        belowRowCoord = node[0] + 1;
        belowColCoord = node[1];
        belowValCoord.push(belowRowCoord);
        belowValCoord.push(belowColCoord);
        neighbors.push(belowValCoord);
    }

    // Left
    let leftValCoord = [];
    let leftRowCoord = node[0];
    let leftColCoord = node[1] - 1;
    if (leftColCoord >= 0) {
        leftValCoord.push(leftRowCoord);
        leftValCoord.push(leftColCoord);
        neighbors.push(leftValCoord);
    }


    // Right
    let rightValCoord = []
    let rightRowCoord = node[0]
    let rightColCoord = node[1] + 1;
    if (rightColCoord < matrix[0].length) {
        rightValCoord.push(rightRowCoord);
        rightValCoord.push(rightColCoord);
        neighbors.push(rightValCoord);
    }

    return neighbors;
}

function findVal(coordinate, matrix) {
    let row = coordinate[0];
    let col = coordinate[1];

    let arr = matrix[row];
    let val = arr[col];
    return val;
}


function bfsPath(matrix, startNode, endValue) {
    const queue = [startNode];
    let visited = new Set();
    visited.add(startNode.toString());
    let bool = false;
    let path = [];


    while (queue.length) {
        let currNode = queue.shift();

        path.push(currNode);

        let currNodeVal = findVal(currNode, matrix);

        if (currNodeVal == endValue) {
            bool = true;
            break;
        }

        let neighbors = findNeighbors(currNode, matrix)

        neighbors.forEach(element => {
            let strVal = element.toString()
            if (!visited.has(strVal)) {
                visited.add(strVal);
                queue.push(element);
            }
        });
    }
    if (bool) return path;
    else return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
