const input = process.argv[2];
// let input = "aabbcccaa";

function compressString(str) {
    let result = "";
    let i = 0;
    let count = 0;
    for (let char of str) {
        if (result.length === 0) {
            result += char;
            count++;
        }
        else {
            if (result[i] === char) count++;
            else {
                result += count;
                result += char;
                count = 1;
                i += 2;
            }
        }
    }
    result += count;

    if (result.length < str.length) {
        return result;
    } else {
        return str;
    }
}

console.log(compressString(input));