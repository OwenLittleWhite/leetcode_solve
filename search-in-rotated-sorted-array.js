/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;

  return dichotomy(left, right, nums, target)
};

function dichotomy(left, right, nums, target) {
  let mid = parseInt((left + right) / 2);
  if (left > right) {
      return -1
  }
  if (nums[left] === target) {
      return left;
  }
  if (nums[right] === target) {
      return right;
  }
  if (nums[mid] === target) {
      return mid;
  }

  if((nums[left] < nums[mid] && target > nums[left] && target < nums[mid]) || 
      (nums[left] > nums[mid] && (target > nums[left] || target<nums[mid])))
  {
      return dichotomy(left + 1, mid - 1, nums, target);
  } else {
      return dichotomy(mid + 1, right - 1, nums, target);
  }
}

console.log(search([5, 1, 2, 3, 4], 1));