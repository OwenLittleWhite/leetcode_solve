/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：
 *
 * 答案中不可以包含重复的四元组。
 *
 * 示例：
 *
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 *
 * 满足要求的四元组集合为：
 * [
 *   [-1,  0, 0, 1],
 *   [-2, -1, 1, 2],
 *   [-2,  0, 0, 2]
 * ]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/4sum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let rtn = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; ) {
    let min = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
    if (min > target) {
      break;
    }
    let max = nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3];
    if (max < target) {
      while (nums[i] === nums[++i]) {}
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; ) {
      let start = j + 1;
      let end = nums.length - 1;
      while (start < end) {
        let sum = nums[i] + nums[j] + nums[start] + nums[end];
        if (sum === target) {
          rtn.push([nums[i], nums[j], nums[start], nums[end]]);
          while (nums[start] === nums[++start]) {}
        } else if (sum < target) {
          while (nums[start] === nums[++start]) {}
        } else {
          while (nums[end] === nums[--end]) {}
        }
      }
      while (nums[j] === nums[++j]) {}
    }
    while (nums[i] === nums[++i]) {}
  }
  return rtn;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
