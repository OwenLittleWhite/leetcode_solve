/**
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。

示例 1:

输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let prev = map.get(s[i]) || 0;
    prev++;
    map.set(s[i], prev);
  }
  let rtn = 0;
  let flag = false;
  map.forEach((value, key) => {
    if (value % 2 && !flag) {
      flag = true;
      rtn += value;
    } else {
      if (value % 2) {
        value--;
      }
      rtn += value;
    }
  });
  return rtn;
};
