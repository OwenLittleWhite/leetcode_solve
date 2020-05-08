/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

示例:

输入: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximal-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let maxSide = 0;
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return maxSide;
  }
  let rows = matrix.length;
  let columns = matrix[0].length;
  let dp = [];
  for (let i = 0; i < rows; i++) {
    dp[i] = [];
    for (let j = 0; j < columns; j++) {
      dp[i][j] = 0;
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }
  let maxSquare = maxSide * maxSide;
  return maxSquare;
};

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);
