/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * 
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * string convert(string s, int numRows);
 * 示例 1:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 示例 2:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * 
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/zigzag-conversion
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }
  let letters = Array.from(s);
  let i = 0;
  let j = 0;
  let arr = [];
  let flag = 0
  for (let k = 0; k < letters.length; k++) {
    if (!flag && j < numRows) {
      arr[i] = arr[i] || [];
      arr[i][j] = letters[k];
      j++;
      if (j >= numRows) {
        j--;
        flag = 1;
      }
    } else {
      i++;
      j--;
      arr[i] = arr[i] || [];
      arr[i][j] = letters[k];
      if (j === 0) {
        flag = 0
        j++
      }
    }
  }
  let result = '';
  for (let t = 0; t < numRows; t++) {
    for (let p = 0; p <= i; p++) {
      if (arr[p] && arr[p][t]) {
        result += arr[p][t]
      }
    }
  }
  return result
};
console.log(convert('ABC', 2))
