isPalindrome = require('./index.js');

const testCases = [
    // name, [argument], expected, expectedException
    ['Not a string with exception', [true, {exception: true}], false, TypeError],
    ['Not a string with no exception', [true, {exception: false}], false, ],
    ['Empty string', [''], true, ],
    ['Single character string', ['1'], true],
    ['Unicode string with no normalization', ['ﬀff', {normalize: false}], false],
    ['Unicode string with normalization in the right form', ['ﬀff', {normalize: true, normalizeForm: "NFKC"}], true],
    ['Unicode string with normalization in wrong form', ["ﬀff", {normalize: true, normalizeForm: "WRONG"}], false, RangeError],
    ['Trim start', ['    1', {trim: 'start'}], true],
    ['Trim end', ['1       ', {trim: 'end'}], true],
    ['Trim both', ['      1       ', {trim: 'both'}], true],
    ['Trim trailing', ['aaaaaaabaa', {trimTrailing: 'a'}], true],
    ['Case sensitive', ['abA', {caseSensitive: true}], false],
    ['Case In-sensitive', ['abA', {caseSensitive: false}], true],
    ['Odd length palindrome string', ['12321'], true],
    ['Even length palindrome string', ['123321'], true],
    ['Not a palindrome string', ['12312321'], false],
]

for (const i in testCases) {
    var result = undefined, status = false, reason = "";

    try {
        result = isPalindrome(...testCases[i][1]);
        reason = "Return " + result;
        if (result === testCases[i][2]) {
            status = true;
        } else {
            status = false;
            reason = reason + ", expected to be " + testCases[i][2];
        }
    } catch (e) {
        reason = "Caught " + e.constructor.name;
        try {
            if (e instanceof testCases[i][3]) status = true;
        } catch {
            status = false;
            reason = reason + ", but no exception expected";
            console.log(e);
        }
    } finally {
        console.log(status ? "Passed" : "Failed", "[#"+ (1 + Number(i)) + "]: ", testCases[i][0], "[" + reason + "]");
        if (status === false) {
            try {
                isPalindrome(testCases[i][1][0], testCases[i][1][1], true);
            } catch (_) {}
        }
    }
}
