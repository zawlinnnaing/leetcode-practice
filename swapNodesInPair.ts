/**
 * Problem: https://leetcode.com/problems/swap-nodes-in-pairs/description/
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let current: ListNode | null = head;
  let nextOne: ListNode | null = head.next;
  const skipAhead = nextOne.next;
  nextOne.next = current;
  current.next = swapPairs(skipAhead);

  return nextOne;
}
