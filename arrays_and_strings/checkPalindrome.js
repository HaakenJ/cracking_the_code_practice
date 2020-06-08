const str = process.argv.slice(2,).join("");

function checkPalindrome(str) {
    if (str.length > 1) {
        let sortedStr = str.toLowerCase().replace(/\s/g, "");
        sortedStr = sortedStr.split("").sort().join("");
        let singles = 0;
        let occurs = 0;
        let currLetter = "";

        for (const s of sortedStr) {
            if (s === currLetter) occurs++;
            else if (occurs === 0) {
                currLetter = s;
                occurs++;
            }
            else {
                if (occurs % 2 !== 0) singles++;
                occurs = 1;
                currLetter = s;
            }
            if (singles > 1) return false;
        }
    }
    return true;
}

console.log(checkPalindrome(str));