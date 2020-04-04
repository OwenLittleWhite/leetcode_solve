/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。



上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/trapping-rain-water
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length < 1) {
    return 0;
  }
  let first = 0;
  let area = 0;
  let temp = 0;
  for (let i = 1; i < height.length; i++) {
    if (height[i] >= height[first]) {
      area += temp;
      temp = 0;
      first = i;
    } else {
      temp = temp + height[first] - height[i];
    }
  }
  temp = 0;
  let right = height.length - 1;
  for (let i = right - 1; i >= 0; i--) {
    if (first > i) {
      break;
    }
    if (height[i] >= height[right]) {
      area += temp;
      right = i;
      temp = 0;
    } else {
      temp = temp + height[right] - height[i];
    }
  }
  return area;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
