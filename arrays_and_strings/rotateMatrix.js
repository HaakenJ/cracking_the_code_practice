const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

function rotateMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result[i] = [];
    }

    const len = matrix.length - 1;
    for (let i = len, e = 0; i >= 0; i--, e++) {
        for (let j = 0; j <= len; j++) {
            result[j][i] = matrix[e][j];
        }
    }
    return result;
}

module.exports = rotateMatrix;