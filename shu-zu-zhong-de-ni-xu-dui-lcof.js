/**
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

 

示例 1:

输入: [7,5,6,4]
输出: 5
 

限制：

0 <= 数组长度 <= 50000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    let cnt = 0;

    function mergeSort(arr) {
        let len = arr.length;
        if (len <= 1) {
            return arr;
        }

        let i = parseInt(len / 2);
        let left = mergeSort(arr.slice(0, i));
        let right = mergeSort(arr.slice(i, len));
        let temp = [];
        let j = 0;
        let k = 0;
        let flag = 1;
        while (j < left.length && k < right.length) {
            if (left[j] > right[k]) {
                temp.push(right[k]);
                k++;
            } else {
                temp.push(left[j]);
                j++;
                cnt = cnt + k;
            }
        }
        while (j < left.length) {
            temp.push(left[j]);
            j++;
            cnt = cnt+k;
        }
        while (k < right.length) {
            temp.push(right[k]);
            k++;
        }
        return temp;
    }

    mergeSort(nums);

    return cnt;
};

console.log(reversePairs([1, 1, -1, -1, -1, 1]));
