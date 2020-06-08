const str1 = process.argv[2];
const str2 = process.argv[3];

function isOneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;

    const letters = {};
    let diff = 0;

    for (const s of str1) {
        if (letters[s] != null) letters[s]++;
        else { letters[s] = 1; }
    }
   
    for (const s of str2) {
        if (letters[s] > 0) letters[s]--;
        else diff++;
        if (diff > 1) return false;
    }
    return true;
}

console.log(isOneAway(str1, str2));
