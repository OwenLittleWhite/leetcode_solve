/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

示例 1:

输入:
11110
11010
11000
00000
输出: 1
示例 2:

输入:
11000
11000
00100
00011
输出: 3
解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let height = grid.length;
	if (height === 0) {
		return 0;
	}
	let width = grid[0].length;
	let victor = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	let queue = [];
	let cnt = 0;
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			let item = grid[i][j];
			if (item === "1") {
				cnt++;
				queue.push([i, j]);
				grid[i][j] = "2";
				while (queue.length) {
					let [i, j] = queue.shift();
					for (let k = 0; k < victor.length; k++) {
						if (
							i - victor[k][0] >= 0 &&
							i - victor[k][0] < height &&
							j - victor[k][1] >= 0 &&
							j - victor[k][1] < width
						) {
							if (grid[i - victor[k][0]][j - victor[k][1]] === "1") {
								queue.push([i - victor[k][0], j - victor[k][1]]);
								grid[i - victor[k][0]][j - victor[k][1]] = "2";
							}
						}
					}
				}
			}
		}
	}
	return cnt;
};
