/**
 * 给你一个整数数组 nums，请你将该数组升序排列。

 

示例 1：

输入：nums = [5,2,3,1]
输出：[1,2,3,5]
示例 2：

输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
 

提示：

1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  hibbardShellSort(nums);
  return nums;
};
function hibbardShellSort(arr) {
  let len = arr.length;
  if (len <= 0) {
    return;
  }
  let d;
  // 算出增量序列最大的K
  let maxK = Math.floor(Math.log2(len + 1));
  let k;
  for (k = maxK; k > 0; k--) {
    d = 2 ** k - 1;
    for (let i = d; i < len; i++) {
      let temp = arr[i]; /* 摸下一张牌 */
      let j;
      for (j = i; j >= d && arr[j - d] > temp; j -= d) {
        arr[j] = arr[j - d]; // 移出空位
      }
      arr[j] = temp;
    }
  }
}
