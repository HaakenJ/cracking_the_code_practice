const input = process.argv[2];
// let input = "aabbcc";

function compressString(str) {
    const charDict = {};
    for (let char of str) {
        if (charDict[char] > 0) charDict[char]++;
        else charDict[char] = 1;
    }

    let result = "";
    for (let char in charDict) {
        result = result + char + charDict[char];
    }

    return result;
}

console.log(compressString(input));