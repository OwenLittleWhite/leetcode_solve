/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;
  return binarySearch(left, right, nums, target)
};

function binarySearch(left, right, nums, target) {
  if (left > right) {
      return [-1, -1]
  }
  let mid = parseInt((left + right) / 2);
  if (nums[mid] === target) {
      let minIndex = leftSearch(left, mid - 1, nums, target);
      if (minIndex === -1) {
          minIndex = mid;
      }
      let maxIndex = rightSearch(mid + 1, right, nums, target);
      if (maxIndex === -1) {
          maxIndex = mid;
      }
      return [minIndex, maxIndex]
  } else if (nums[mid] > target) {
      return binarySearch(left, mid - 1, nums, target);
  } else {
      return binarySearch(mid + 1, right, nums, target)
  }
}

function leftSearch(left, right, nums, target) {
  if (left > right) {
      return -1;
  }
  let mid = parseInt((left + right) / 2);
  if (nums[mid] === target) {
      let index = leftSearch(left, mid - 1, nums, target);
      if (index === -1) {
          return mid;
      }
      return index;
  } else {
      return leftSearch(mid + 1, right, nums, target);
  }


}

function rightSearch(left, right, nums, target) {
  if (left > right) {
      return -1;
  }
  let mid = parseInt((left + right) / 2);
  if (nums[mid] === target) {
      let index = rightSearch(mid + 1, right, nums, target);
      if (index === -1) {
          return mid;
      }
      return index;
  } else {
      return rightSearch(left, mid - 1, nums, target);

  }
}
