/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoList(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoList(list1.next, list2);
    return list1;
  }
  list2.next = mergeTwoList(list1, list2.next);
  return list2;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) {
    return null;
  }

  let resultList = lists[0];
  for (let i = 1; i < lists.length; i++) {
    resultList = mergeTwoList(resultList, lists[i]);
  }
  return resultList;
}
