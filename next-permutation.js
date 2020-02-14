/**
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let index = nums.length - 1;
  let temp = -Infinity;
  for (let i = index; i >= 0; i--) {
    if (nums[i] >= temp) {
      temp = nums[i];
    } else {
      index = i;
      let swagIndex = nums.length - 1;
      for (let j = nums.length - 1; j > index; j--) {
        if (nums[j] > nums[index]) {
          swagIndex = j;
          break;
        }
      }
      let _temp = nums[index];
      nums[index] = nums[swagIndex];
      nums[swagIndex] = _temp;
      let len = nums.length - 1 - index;
      let mid = parseInt(len / 2);

      for (let k = 1; k <= mid; k++) {
        let temp = nums[index + k];
        nums[index + k] = nums[nums.length - k];
        nums[nums.length - k] = temp;
      }
      return;
    }
    
  }
  index = -1;
  let len = nums.length - 1 - index;
  let mid = parseInt(len / 2);

  for (let k = 1; k <= mid; k++) {
    let temp = nums[index + k];
    nums[index + k] = nums[nums.length - k];
    nums[nums.length - k] = temp;
  }
};
let a = [3,2,1]
console.log(nextPermutation(a), a)
