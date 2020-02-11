/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head
  }
  let temp = new ListNode(-1);
  let rtn = head.next;
  temp.next = head;
  let temp2 = new ListNode(-3);
  while(temp.next) {
    let swag = new ListNode(-2);
    let a = temp.next;
    let b = a.next;
    if (b) {
      swag.next = b.next;
      b.next = a;
      a.next = temp;
      temp.next = swag.next;
      temp2.next = b;
      temp2 = a;
    }
    
  }
  temp2.next = null
  return rtn;
};

var swapPairs2 = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let first = head;
  let second = head.next;

  first.next = swapPairs2(second.next);
  second.next = first;
  return second;
};
