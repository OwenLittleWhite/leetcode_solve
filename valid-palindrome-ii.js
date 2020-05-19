/**
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:

输入: "aba"
输出: True
示例 2:

输入: "abca"
输出: True
解释: 你可以删除c字符。
注意:

字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	let arr = s.split("");
	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
		if (arr[start] !== arr[end]) {
			let temp = Array.from(arr);
			temp.splice(start, 1);
			arr.splice(end, 1);
			return isValid(temp.join("")) || isValid(arr.join(""));
		} else {
			start++;
			end--;
		}
	}
	return true;
};
function isValid(s) {
	let i = 0;
	let j = s.length - 1;
	while (i < j) {
		if (s[i] !== s[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}

console.log(
	validPalindrome(
		"aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
	)
);
