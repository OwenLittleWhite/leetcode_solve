/**
 * 寻找两个有序数组的中位数
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 示例 1: 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 简单解法就是将两个数组合并取出中间的数。
 */
/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
var findMedianSortedArrays = function (nums1, nums2) {
  let allNums = []
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      allNums.push(nums1[i]);
      i++;
    } else {
      allNums.push(nums2[j]);
      j++;
    }
  }
  if (i < nums1.length) {
    for (; i < nums1.length; i++) {
      allNums.push(nums1[i])
    }
  }
  if (j < nums2.length) {
    for (; j < nums2.length; j++) {
      allNums.push(nums2[j])
    }
  }
  let midNum;
  if (allNums.length % 2) {
    midNum = allNums[Math.floor(allNums.length / 2)]
  } else {
    let index = Math.floor(allNums.length / 2)
    midNum = (allNums[index] + allNums[index - 1]) / 2
  }
  return midNum
};
console.log(findMedianSortedArrays([1, 3], [2]))
/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
var findMedianSortedArrays2 = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  if (m > n) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
    let temp2 = m;
    m = n;
    n = temp2;
  }
  let iMin = 0, iMax = m, halfLen = Math.floor((m + n + 1) / 2);
  while (iMin <= iMax) {
    let i = Math.floor((iMin + iMax) / 2);
    let j = halfLen - i;
    if (i < iMax && nums2[j - 1] > nums1[i]) {
      iMin = i + 1; // i is too small
    }
    else if (i > iMin && nums1[i - 1] > nums2[j]) {
      iMax = i - 1; // i is too big
    }
    else { // i is perfect
      let maxLeft = 0;
      if (i == 0) { maxLeft = nums2[j - 1]; }
      else if (j == 0) { maxLeft = nums1[i - 1]; }
      else { maxLeft = Math.max(nums1[i - 1], nums2[j - 1]); }
      if ((m + n) % 2 == 1) { return maxLeft; }

      let minRight = 0;
      if (i == m) { minRight = nums2[j]; }
      else if (j == n) { minRight = nums1[i]; }
      else { minRight = Math.min(nums2[j], nums1[i]); }

      return (maxLeft + minRight) / 2.0;
    }

  }
  return 0.0
}
