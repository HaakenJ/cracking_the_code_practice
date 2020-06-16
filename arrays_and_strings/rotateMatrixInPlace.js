const matrix3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const matrix4 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

const matrix5= [
    [1,2,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

function rotateMatrixInPlace(matrix) {
    if (matrix.length <= 1) return matrix;

    const n = matrix.length - 1;
    // Keep track of the first an last items in the row, these values converge
    // as the algorithm moves to the inner matricies.
    for (let first=0, last=n; first<last; first++, last--) {
        // Keep track of an offset for the current outer layer of the matrix
        // Increasing the offset moves the current item to the right.
        for (let offset = 0; first+offset < last; offset++) {

            const temp = matrix[first][first + offset];
            matrix[first][first + offset] = matrix[last - offset][first];
            matrix[last - offset][first]  = matrix[last][last - offset];
            matrix[last][last - offset]   = matrix[first + offset][last];
            matrix[first + offset][last]  = temp;
        }
    }
    return matrix;
}

module.exports = rotateMatrixInPlace;