/**
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 

示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/edit-distance
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let n = word1.length;
  let m = word2.length;
  // 有一个字符串为空串
  if (n * m == 0) {
    return n + m;
  }
  let D = [];
  // 边界状态初始化
  for (let i = 0; i < n + 1; i++) {
    D[i] = [];
    D[i][0] = i;
  }
  for (let j = 0; j < m + 1; j++) {
    D[0][j] = j;
  }

  // 计算所有 DP 值
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      let left = D[i - 1][j] + 1;
      let down = D[i][j - 1] + 1;
      let left_down = D[i - 1][j - 1];
      if (word1.charAt(i - 1) != word2.charAt(j - 1)) left_down += 1;
      D[i][j] = Math.min(left, Math.min(down, left_down));
    }
  }
  return D[n][m];
};
