/**
 * 给你一个整数数组 nums 和一个整数 k。

如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。

请返回这个数组中「优美子数组」的数目。

 

示例 1：

输入：nums = [1,1,2,1,1], k = 3
输出：2
解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。
示例 2：

输入：nums = [2,4,6], k = 1
输出：0
解释：数列中不包含任何奇数，所以不存在优美子数组。
示例 3：

输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
输出：16
 

提示：

1 <= nums.length <= 50000
1 <= nums[i] <= 10^5
1 <= k <= nums.length

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-number-of-nice-subarrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
	let total = 0;
	let odds = [];
	let len = nums.length;
	for (let i = 0; i < len; i++) {
		if (nums[i] % 2) {
			odds.push(i);
		}
	}
	if (odds.length < k) {
		return 0;
	}
	for (let i = 0; i <= odds.length - k; i++) {
		let cur = odds[i];
		let start = i - 1 >= 0 ? odds[i - 1] : -1;
		let cur2 = odds[i + k - 1];
		let end = i + k >= odds.length ? len : odds[i + k];
		total = total + (cur - start) * (end - cur2);
	}

	return total;
};

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
