// https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    const charsCnt = {};
    for (let k = 0; k < chars.length; k++) {
      if (charsCnt[chars[k]]) {
        charsCnt[chars[k]]++;
      } else {
        charsCnt[chars[k]] = 1;
      }
    }
    let j = 0;
    const word = words[i];
    for (; j < word.length; j++) {
      if ((charsCnt[word[j]] === undefined) || charsCnt[word[j]] === 0) {
        break;
      }
      charsCnt[word[j]]--;
    }
    console.log(word, j);
    j === word.length &&  (res += word.length);
  }
  return res
};

console.log(countCharacters(["cat","bt","hat","tree"], "atach"));
// console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"));


