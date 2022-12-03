function getVal(node, matrix) {
    let arr = matrix[node[0]];
    let val = arr[node[1]];
    return val;
}

function findNeighbors(node, matrix) {
    // Don't forget to include diagonal neighbors!!!

    let neighbors = [];

    let currentVal = getVal(node, matrix);
    let row = node[0];
    let col = node[1];


    let possible = [
        [row, col-1], //left
        [row, col+1], //right
        [row-1, col], //top
        [row+1, col], //bottom
        [row-1, col-1], //topleft
        [row-1, col+1], //topright
        [row+1, col-1], //bottomleft
        [row+1, col+1] //bottomright
    ];

    possible.forEach(element => {
        const [nR, nC] = element;
        if (matrix[nR] && matrix[nR][nC]) {
            let diff = getVal(element, matrix) - currentVal;
            if (diff <= 1 && diff >= -1) {
                neighbors.push(element);
            }
        }
    });

    return neighbors;

}

function pathTraversal(node, matrix, visited, peak) {

    const queue = [node];
    visited.add(node.toString());
    let bool = false;

    while (queue.length) {
        let current = queue.pop();

        let currVal = getVal(current, matrix);

        if (currVal == peak) {
            bool = true;
            break;
        }

        let neighbors = findNeighbors(current, matrix);

        neighbors.forEach(element => {
            let strVal = element.toString();
            if (!visited.has(strVal)) {
                visited.add(strVal);
                queue.push(element);
            }
        });
    }
    return bool;
}

function identifyPath(mountain) {
    // Find the peak
    let peak = mountain[0][0];
    let visited = new Set();

    for (let i=0; i<mountain.length; i++) {
        for (let j=0; j<mountain[i].length; j++) {
            if (mountain[i][j] > peak) peak = mountain[i][j];
        }
    }

    // Find the start
    let start;

    for (let i=0; i<mountain.length; i++) {
        for (let j=0; j<mountain[i].length; j++) {
            if (mountain[i][j] == 0) {
                let node = [i, j];
                if (pathTraversal(node, mountain, visited, peak)) start = node;
            }
        }
    }

    return start;
}

// Uncomment for local testing

// // Example 0
const mountain_0 = [
    [1, 2, 4],
    [4, 5, 9],
    [5, 7, 6]
];

console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'



/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
