// Fuzzy Matching Algorithm
// Maybe a Levenshtein distance would be better?
// or a reverse engineering of the VS Code fuzzy matching algorithm

// scores based on VS code

const SEQUENTIAL_BONUS = 15; // bonus for adjacent matches
const SEPARATOR_BONUS = 30; // bonus if match occurs after a separator
const CAMEL_BONUS = 30; // bonus if match is uppercase and prev is lower
const FIRST_LETTER_BONUS = 15; // bonus if the first letter is matched

const LEADING_LETTER_PENALTY = -5; // penalty applied for every letter in str before the first match
const MAX_LEADING_LETTER_PENALTY = -15; // maximum penalty for leading letters
const UNMATCHED_LETTER_PENALTY = -1;


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
