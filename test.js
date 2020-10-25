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
    ['Unicode string with normalization in wrong form with exception', ["ﬀff", {normalize: true, normalizeForm: "WRONG", exception: true}], , RangeError],
    ['Trim start', ['    1', {trim: 'start'}], true],
    ['Trim end', ['1       ', {trim: 'end'}], true],
    ['Trim both', ['      1       ', {trim: 'both'}], true],
    ['Trim trailing single char', ['aaaaaaabaa', {trimTrailing: 'a'}], true],
    ['Trim trailing string', ['bababazab', {trimTrailing: 'ba'}], true],
    ['Trim trailing not string', ['1111', {trimTrailing: 1}], true],
    ['Trim trailing not string with exception', ['1111', {trimTrailing: 1, exception: true}], , RangeError],
    ['Multiple trim trailing char', ['ihihihihabababazabahi', {trimTrailing: ['ba', 'ih']}], true],
    ['Multiple trim trailing not string', ['11112221', {trimTrailing: [1,2]}], true],
    ['Multiple trim trailing not string width exception', ['111122221111', {trimTrailing: [1,2], exception: true}], , RangeError],
    ['Remove non printable ascii', ['ÄçÇéÉêabaöÖÐþúÚ', {remove: "non-printable-ascii"}], true],
    ['Remove punctuation', ['aa,,,bb,,.aa', {remove: "punctuation"}], true],
    ['Remove punctuation and non printable ascii', ['aa,,,bb,,.aaÐþúÚ', {remove: ["punctuation", "non-printable-ascii"]}], true],
    ['Remove with other than string or array of string', ['ÄçÇéÉêabaöÖÐþúÚ', {remove: 1}],, RangeError],
    ['Remove with unsupported mode', ['ÄçÇéÉêabaöÖÐþúÚ', {remove: ['everything']}],, RangeError],
    ['Case sensitive', ['abA', {caseSensitive: true}], false],
    ['Case In-sensitive', ['abA', {caseSensitive: false}], true],
    ['Odd length palindrome string', ['12321'], true],
    ['Even length palindrome string', ['123321'], true],
    ['Not a palindrome string', ['12312321'], false],
    ['Example test', ['    Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.    ', {remove: ["punctuation", "non-printable-ascii", "whitespace"], caseSensitive: false, trim: "both"}], true],
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
