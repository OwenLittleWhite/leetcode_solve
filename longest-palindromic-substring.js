/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/longest-palindromic-substring
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {string} s
* @return {string}
* 解法1:通过遍历每一项，中心向外扩展
*/
var longestPalindrome = function (s) {
  let arr = Array.from(s);
  let maxPalindrome = [];
  for (let i = 0; i < arr.length; i++) {
    let j = 1;
    let temp = [];
    temp.push(arr[i]);
    let temp2 = [];
    let j2 = 1;
    if (arr[i] === arr[i + 1]) {
      temp2.push(arr[i]);
      temp2.push(arr[i + 1]);
      while ((i + j2 + 1) < arr.length) {
        if (arr[i - j2] === arr[i + j2 + 1]) {
          temp2.unshift(arr[i - j2]);
          temp2.push(arr[i + j2 + 1]);
          j2++;
        } else {
          break;
        }
      }
    }
    while ((i + j) < arr.length) {
      if (arr[i - j] === arr[i + j]) {
        temp.unshift(arr[i - j]);
        temp.push(arr[i + j]);
        j++;
      } else {
        break;
      }
    }
    temp = temp2.length > temp.length ? temp2 : temp
    if (temp.length > maxPalindrome.length) {
      maxPalindrome = temp
    }
  }
  return maxPalindrome.join('')
};

