/**
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

示例 1:

输入: [10,2]
输出: 210
示例 2:

输入: [3,30,34,5,9]
输出: 9534330
说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/largest-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  if (nums.length === 1) {
    return nums[0] + "";
  }
  let flag = true;
  nums.sort((a, b) => {
    if (!flag || a != 0 || b != 0) {
      flag = false;
    }
    a = a + "";
    b = b + "";
    let i = 0;
    while (i < a.length && i < b.length) {
      if (a[i] > b[i]) {
        return -1;
      } else if (a[i] < b[i]) {
        return 1;
      } else {
        i++;
      }
      if (i >= b.length && i < a.length) {
        a = a.slice(i);
        i = 0;
      } else if (i < b.length && i >= a.length) {
        b = b.slice(i);
        i = 0;
      }
    }
    return 1;
  });
  if (flag) {
    return "0";
  }
  return nums.join("");
};
