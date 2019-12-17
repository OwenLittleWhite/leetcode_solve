/**
 *  实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 *
 * 示例 1:
 *
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 * 示例 2:
 *
 * 输入: 2.10000, 3
 * 输出: 9.26100
 * 示例 3:
 *
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2-2 = 1/22 = 1/4 = 0.25
 * 说明:
 *
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/powx-n
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n > 0) {
    return _helper(x, n);
  }
  if (n < 0) {
    n = -n;
    return 1 / _helper(x, n);
  }
};

function _helper(x, n) {
  if (n === 1) {
    return x;
  }
  if (n % 2) {
    // n为奇数
    return _helper(x * x, parseInt(n / 2)) * x;
  } else {
    // n为偶数
    return _helper(x * x, n / 2);
  }
}
// 递归转化为循环
var myPow2 = function(x, n) {
  let res = 1.0;
  for (i = Math.abs(n); i != 0; i = Math.floor(i / 2)) {
    if (i % 2 != 0) {
      res *= x;
    }
    x *= x;
  }
  return n < 0 ? 1 / res : res;
};
