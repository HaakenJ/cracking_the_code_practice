function stringRotation(s1, s2) {
    let start = 0;
    while (s2.indexOf(s1[0], start) >= 0) {
        let firstLetter = s2.indexOf(s1[0], start);
        let swapped = s2.slice(firstLetter,) + s2.slice(0, firstLetter);

        if (s1.includes(swapped)) return true;
        start++;
    }
    return false;
}

module.exports = stringRotation;