/**
 * 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。

每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

请你返回最终形体的表面积。

 

示例 1：

输入：[[2]]
输出：10
示例 2：

输入：[[1,2],[3,4]]
输出：34
示例 3：

输入：[[1,0],[0,2]]
输出：16
示例 4：

输入：[[1,1,1],[1,0,1],[1,1,1]]
输出：32
示例 5：

输入：[[2,2,2],[2,1,2],[2,2,2]]
输出：46
 

提示：

1 <= N <= 50
0 <= grid[i][j] <= 50
通过次数24,999提交次数38,824

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/surface-area-of-3d-shapes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let witch = grid[0].length;
  let height = grid.length;
  let rtn = 0;
  for (let i = 0; i < height; i++) {
    let temp = 0;
    for (let j = 0; j < witch; j++) {
      let item = grid[i][j];
      if (grid[i][j] > 0) {
        rtn = rtn + grid[i][j] * 6 - (grid[i][j] - 1) * 2;
      }
      rtn = rtn - Math.min(temp, item) * 2;
      temp = item;
    }
  }

  for (let i = 0; i < witch; i++) {
    let temp = 0;
    for (let j = 0; j < height; j++) {
      let item = grid[j][i];
      rtn = rtn - Math.min(temp, item) * 2;
      temp = item;
    }
  }

  return rtn;
};
