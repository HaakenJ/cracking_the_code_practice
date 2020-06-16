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

function rotateMatrix(matrix) {
    if (matrix.length <= 1) return matrix;
    const n = matrix.length - 1;

    for (let first=0, last=n; first<last; first++, last--) {
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

console.log(rotateMatrix(matrix3));
console.log(rotateMatrix(matrix4));
console.log(rotateMatrix(matrix5));