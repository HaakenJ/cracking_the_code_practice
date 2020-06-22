// function stringRotation(s1, s2) {
//     let start = 0;
//     while (s2.indexOf(s1[0], start) >= 0) {
//         let firstLetter = s2.indexOf(s1[0], start);
//         let swapped = s2.slice(firstLetter,) + s2.slice(0, firstLetter);

//         if (s1.includes(swapped)) return true;
//         start++;
//     }
//     return false;
// }

function stringRotation(s1, s2) {
    const len = s1.length;
    if (len === s2.length && len > 0) {
        const s1s1 = s1 + s1;
        return s1s1.includes(s2);
    }
    return false;
}

module.exports = stringRotation;