const matrix3 = [
    [1,2,0],
    [4,5,6],
    [7,8,9]
]

const matrix4 = [
    [1,2,0,4],
    [5,6,7,8],
    [0,10,11,12],
    [13,14,15,16]
]

const matrix5= [
    [0,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,0]
]

function cloneMatrix(matrix) {
    let matClone = [];
    for (let i = 0; i < matrix.length; i++) {
        matClone[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            matClone[i][j] = matrix[i][j];
        }
    }
    return matClone;
}

function zeroMatrix(matrix) {
    if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
    const cols = {};
    const rows = {};
    const visited = {};
    const n = matrix.length;
    let matClone = cloneMatrix(matrix);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                if (!cols[j]) {
                    cols[j] = true;
                    for (let k = 0; k < n; k++) {
                        if (!visited[`${k},${j}`]) {
                            matClone[k][j] = 0;
                            visited[`${k},${j}`] = true;
                        }
                    }
                }
                if (!rows[i]) {
                    rows[i] = true;
                    for (let k = 0; k < n; k++) {
                        if (!visited[`${i},${k}`]) {
                            matClone[i][k] = 0;
                            visited[`${i},${k}`] = true;
                        }
                    }
                }
            }
        }
    }
    return matClone;
}

console.log(zeroMatrix(matrix3));
console.log(zeroMatrix(matrix4));
console.log(zeroMatrix(matrix5));