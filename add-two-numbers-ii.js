/**
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

 

进阶：

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

 

示例：

输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 8 -> 0 -> 7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let num1 = [];
	while (l1) {
		num1.unshift(l1.val);
		l1 = l1.next;
	}
	let num2 = [];
	while (l2) {
		num2.unshift(l2.val);
		l2 = l2.next;
	}
	let sum = [];
	let flag = 0;
	let i = 0;
	for (i = 0; i < num1.length && i < num2.length; i++) {
		let temp = num1[i] + num2[i] + flag;
		if (temp >= 10) {
			flag = 1;
			temp = temp % 10;
		} else {
			flag = 0;
		}
		sum.unshift(temp);
	}
	for (; i < num1.length; i++) {
		let temp = num1[i] + flag;
		if (temp >= 10) {
			flag = 1;
			temp = temp % 10;
		} else {
			flag = 0;
		}
		sum.unshift(temp);
	}

	for (; i < num2.length; i++) {
		let temp = num2[i] + flag;
		if (temp >= 10) {
			flag = 1;
			temp = temp % 10;
		} else {
			flag = 0;
		}
		sum.unshift(temp);
	}
	if (flag) {
		sum.unshift(flag);
	}
	let rtn = new ListNode(-1);
	let temp = rtn;
	for (let j = 0; j < sum.length; j++) {
		temp.next = new ListNode(sum[j]);
		temp = temp.next;
	}
	return rtn.next;
};
