/**
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]
 

限制：

0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  if (k === 0 || arr.length === 0) {
    return [];
  }
  let maxheap = [Infinity];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (maxheap.length - 1 < k) {
      insert(item, maxheap);
    } else {
      if (item < maxheap[1]) {
        addToTop(item, maxheap);
      }
    }
  }

  function insert(item, heap) {
    heap.push(item);
    let index = heap.length - 1;
    while (heap[index] > heap[parseInt(index / 2)]) {
      let temp = heap[index];
      heap[index] = heap[parseInt(index / 2)];
      heap[parseInt(index / 2)] = temp;
      index = parseInt(index / 2);
    }
  }

  function addToTop(item, heap) {
    heap[1] = item;
    let index = 1;
    while (true) {
      if (heap[2 * index] === undefined) {
        break;
      }
      if (heap[2 * index + 1] === undefined) {
        if (heap[2 * index] < heap[index]) {
          break;
        }
        let temp = heap[2 * index];
        heap[2 * index] = heap[index];
        heap[index] = temp;
        index = 2 * index;
      } else {
        if (
          heap[2 * index] < heap[index] &&
          heap[2 * index + 1] < heap[index]
        ) {
          break;
        }
        if (heap[2 * index] > heap[2 * index + 1]) {
          let temp = heap[2 * index];
          heap[2 * index] = heap[index];
          heap[index] = temp;
          index = 2 * index;
        } else {
          let temp = heap[2 * index + 1];
          heap[2 * index + 1] = heap[index];
          heap[index] = temp;
          index = 2 * index + 1;
        }
      }
    }
  }
  maxheap.shift();
  return maxheap;
};

console.log(getLeastNumbers([0, 1, 1, 2, 4, 4, 1, 3, 3, 2], 6));
