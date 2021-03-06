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

module.exports = zeroMatrix;