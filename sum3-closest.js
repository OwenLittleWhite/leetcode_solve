/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/3sum-closest
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort(function(a, b) {
    if (a - b < 0) {
      return -1;
    } else {
      return 1;
    }
  });
  let sum = nums[0] + nums[1] + nums[2];
  outer: for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let _sum = nums[i] + nums[start] + nums[end];
      if (Math.abs(target - _sum) < Math.abs(target - sum)) {
        sum = _sum;
      }
      if (_sum > target) {
        end--;
      } else if (_sum < target) {
        start++;
      } else {
        sum = _sum;
        break outer;
      }
    }
  }
  return sum;
};
threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82);

/**
 * 解题思路：
 * 
 * 解法一： 暴力解法
 * 三重循环将每一个可能性都计算一遍时间复杂度为O(n^3)
 * 
 * 解法二： 双指针法
 * 
 * 1. 先将数组从小到大排序
 * 
 * 2. 从数组index为0的为止开始遍历设为变量i，
 * 然后将i+1的位置设为第一个指针start，数组的最后一个位置设为第二个指针end
 * 将let _sum = nums[i]+nums[start]+nums[end];
 * 
 * 将_sum和target的绝对值与和之前的sum的绝对值比较，小的话就将_sum赋值给sum
 * 
 * 核心在于，将_sum和target的绝对值进行比较
 * 
 */
