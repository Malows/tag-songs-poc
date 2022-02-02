// Fuzzy Matching Algorithm
// Maybe a Levenshtein distance would be better?
// or a reverse engineering of the VS Code fuzzy matching algorithm

// scores based on VS code



/**
 * Returns true if each character in the needle pattern is found sequentially within the haystack string.
 * @param {*} needle string
 * @param {*} haystack string
 */
function sequentialityCheck(needle: string, haystack: string): boolean {
    let needleIndex = 0;
    let stackIndex = 0;

    const needleLength = needle.length;
    const stackLength = haystack.length;

    while (needleIndex != needleLength && stackIndex != stackLength) {
        const patternChar = needle[needleIndex].toLowerCase();

        const strChar = haystack[stackIndex].toLowerCase();

        if (patternChar === strChar) {
            ++needleIndex;
        }

        ++stackIndex;
    }

    return needleLength != 0 && stackLength != 0 && needleIndex == needleLength;
}


// really arbitrary values
const RECURSION_LIMIT = 20;
const MAX_MATCHING_RESULTS = 100;

// not so arbitrary values
const SEQUENTIAL_BONUS = 15; // bonus for adjacent matches
const SEPARATOR_BONUS = 30; // bonus if match occurs after a separator
const CAMEL_BONUS = 30; // bonus if match is uppercase and prev is lower
const FIRST_LETTER_BONUS = 15; // bonus if the first letter is matched

const LEADING_LETTER_PENALTY = -5; // penalty applied for every letter in str before the first match
const MAX_LEADING_LETTER_PENALTY = -15; // maximum penalty for leading letters
const UNMATCHED_LETTER_PENALTY = -1;


function fuzzyMatchRecursive(
    pattern: string,
    str: string,
    {
        patternCurIndex = 0,
        strCurrentIndex = 0,
        srcMatches = 0,
        matches = [],
        nextMatch = 0,
        recursionCount = 0,
    }: {
        patternCurIndex: number,
        strCurrentIndex: number,
        srcMatches,
        matches: number[],
        nextMatch: number,
        recursionCount: number,
    }
): [boolean, number] {
    let outScore = 0;

    recursionCount += 1;

    // Return if recursion limit is reached.
    if (recursionCount >= RECURSION_LIMIT) {
        return [false, outScore];
    }

    // Return if we reached ends of strings.
    if (patternCurIndex === pattern.length || strCurrentIndex === str.length) {
        return [false, outScore];
    }

    // Recursion params
    let recursiveMatch = false;
    let bestRecursiveMatches = [];
    let bestRecursiveScore = 0;

    // Loop through pattern and str looking for a match.
    let firstMatch = true;

    while (patternCurIndex < pattern.length && strCurrentIndex < str.length) {
        const matchFound = pattern[patternCurIndex].toLowerCase() === str[strCurrentIndex].toLowerCase();

        if (matchFound) {
            if (nextMatch >= MAX_MATCHING_RESULTS) {
                return [false, outScore];
            }

            if (firstMatch && srcMatches) {
                matches = [...srcMatches];
                firstMatch = false;
            }

            const recursiveMatches = [];

            const [matched, recursiveScore] = fuzzyMatchRecursive(
                pattern,
                str,
                {
                    patternCurIndex,
                    strCurrentIndex: strCurrentIndex + 1,
                    srcMatches: matches,
                    matches: recursiveMatches,
                    nextMatch,
                    recursionCount
                }
            );

            if (matched) {
                // Pick best recursive score.
                if (!recursiveMatch || recursiveScore > bestRecursiveScore) {
                    bestRecursiveMatches = [...recursiveMatches];
                    bestRecursiveScore = recursiveScore;
                }
                recursiveMatch = true;
            }

            matches[nextMatch++] = strCurrentIndex;

            ++patternCurIndex;
        }

        ++strCurrentIndex;
    }

    const matched = patternCurIndex === pattern.length;

    if (matched) {
        outScore = 100;

        // Apply leading letter penalty
        let penalty = LEADING_LETTER_PENALTY * matches[0];

        penalty = penalty < MAX_LEADING_LETTER_PENALTY
            ? MAX_LEADING_LETTER_PENALTY
            : penalty;

        outScore += penalty;

        //Apply unmatched penalty
        const unmatched = str.length - nextMatch;

        outScore += UNMATCHED_LETTER_PENALTY * unmatched;

        // Apply ordering bonuses
        for (let i = 0; i < nextMatch; i++) {
            const currentIndex = matches[i];

            if (i > 0) {
                const previousIndex = matches[i - 1];

                if (currentIndex == previousIndex + 1) {
                    outScore += SEQUENTIAL_BONUS;
                }
            }

            // Check for bonuses based on neighbor character value.
            if (currentIndex > 0) {

                // Camel case scoring
                const prevChar = str[currentIndex - 1];
                const currChar = str[currentIndex];

                if (
                    prevChar !== prevChar.toUpperCase() &&
                    currChar !== currChar.toLowerCase()
                ) {
                    outScore += CAMEL_BONUS;
                }

                const isSeparator = prevChar === "_" || prevChar === " ";

                if (isSeparator) {
                    outScore += SEPARATOR_BONUS;
                }
            } else {
                // First letter
                outScore += FIRST_LETTER_BONUS;
            }
        }

        // Return best result

        // Recursive score is better than "this"
        if (recursiveMatch && (!matched || bestRecursiveScore > outScore)) {
            matches = [...bestRecursiveMatches];
            outScore = bestRecursiveScore;

            return [true, outScore];
        }

        // "this" score is better than recursive
        if (matched) {
            return [true, outScore];
        }

        return [false, outScore];
    }

    return [false, outScore];
}


export function fuzzyMatch(pattern: string, str: string): [boolean, number] {

    return fuzzyMatchRecursive(
      pattern,
      str,
      {
        patternCurIndex: 0,
        strCurrentIndex: 0,
        srcMatches: null,
        matches: [],
        nextMatch: 0,
        recursionCount: 0
      }
    );
  }
