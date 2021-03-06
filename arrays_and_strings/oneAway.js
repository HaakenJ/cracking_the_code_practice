// const str1 = process.argv[2];
// const str2 = process.argv[3];

function isOneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;
    if (needsOneReplacement(str1, str2) || needsOneInsert(str1, str2)) return true;
    return false;
}

function needsOneReplacement(str1, str2) {
    let foundDiff = false;
    let len = 0;
    str1.length > str2.length ? len = str1.length : len = str2.length;
    for (let i = 0, j = 0; i < len; i++, j++) {
        if (!(str1[i] === str2[j])) {
            foundDiff = true;
        }
        if (foundDiff) return false;
    }
    return true;
}

function needsOneInsert(str1, str2) {
    for (let i = 0, j = 0; i < str1.length; i++, j++) {
        if (!(str1[i] === str2[j])) {
            if (str1[i+1] === str2[j]) {
                return str1.slice(i+1,) === str2.slice(j,);
            }
            else if (str1[i] === str2[j+1]) {
                return str1.slice(i,) === str2.slice(j+1,);
            }
            else {
                return false;
            }
        }
    }
    return true;
}

module.exports = isOneAway;