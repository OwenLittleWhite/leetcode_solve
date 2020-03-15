/**
 * 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)

示例 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。

示例 2:

[[0,0,0,0,0,0,0,0]]
对于上面这个给定的矩阵, 返回 0。

注意: 给定的矩阵grid 的长度和宽度都不超过 50。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-area-of-island
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let width = grid[0].length;
  let height = grid.length;
  let max = 0;
  function helper(path, i, j, grid, area) {
    if (grid[i + 1] && grid[i + 1][j] === 1) {
      path.push([i + 1, j]);
      area++;
      grid[i + 1][j] = 0;
      helper(Array.from(path), i + 1, j, grid, area);
    } else if (grid[i - 1] && grid[i - 1][j] === 1) {
      path.push([i - 1, j]);
      area++;
      grid[i - 1][j] = 0;
      helper(Array.from(path), i - 1, j, grid, area);
    } else if (grid[i][j - 1] === 1) {
      path.push([i, j - 1]);
      area++;
      grid[i][j - 1] = 0;
      helper(Array.from(path), i, j - 1, grid, area);
    } else if (grid[i][j + 1] === 1) {
      path.push([i, j + 1]);
      area++;
      grid[i][j + 1] = 0;
      helper(Array.from(path), i, j + 1, grid, area);
    } else {
      path.pop();
      if (path.length === 0) {
        max = Math.max(max, area);
        return;
      }
      let data = path[path.length - 1];
      helper(Array.from(path), data[0], data[1], grid, area);
    }
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        helper([[i, j]], i, j, grid, 1);
      }
    }
  }
  return max;
};

console.log(
  maxAreaOfIsland([
    [1, 1],
    [1, 0]
  ])
);
