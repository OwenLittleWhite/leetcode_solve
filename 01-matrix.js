/**
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。

示例 1:
输入:

0 0 0
0 1 0
0 0 0
输出:

0 0 0
0 1 0
0 0 0
示例 2:
输入:

0 0 0
0 1 0
1 1 1
输出:

0 0 0
0 1 0
1 2 1
注意:

给定矩阵的元素个数不超过 10000。
给定矩阵中至少有一个元素是 0。
矩阵中的元素只在四个方向上相邻: 上、下、左、右。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/01-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let queue = [];
  let m = matrix.length, n = matrix[0].length;
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] == 0) {
              queue.push([i, j]);
          } else {
              matrix[i][j] = -1;
          }
      }
  }

  let dx = [-1, 1, 0, 0]
  let dy = [0, 0, -1, 1]
  while (queue.length) {
      let point = queue.shift();
      let x = point[0], y = point[1];
      for (let i = 0; i < 4; i++) {
          let newX = x + dx[i];
          let newY = y + dy[i];
          // 如果四邻域的点是 -1，表示这个点是未被访问过的 1
          // 所以这个点到 0 的距离就可以更新成 matrix[x][y] + 1。
          if (newX >= 0 && newX < m && newY >= 0 && newY < n
              && matrix[newX][newY] == -1) {
              matrix[newX][newY] = matrix[x][y] + 1;
              queue.push([newX, newY]);
          }
      }
  }

  return matrix;
};

console.log(updateMatrix([[1,0,1,1,0,0,1,0,0,1],[0,1,1,0,1,0,1,0,1,1],[0,0,1,0,1,0,0,1,0,0],[1,0,1,0,1,1,1,1,1,1],[0,1,0,1,1,0,0,0,0,1],[0,0,1,0,1,1,1,0,1,0],[0,1,0,1,0,1,0,0,1,1],[1,0,0,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,0,1,0],[1,1,1,1,0,1,0,0,1,1]]))
