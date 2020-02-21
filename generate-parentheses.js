/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let map = new Map();
  map.set("(", n);
  map.set(")", n);
  let path = [];
  let rtn = [];
  let helper = function(map, path, last) {
    if (last === "(") {
      if (map.get("(")) {
        path.push("(");
        map.set("(", map.get("(") - 1);
        helper(new Map(map), path.slice(), "(");
        path.pop();
        map.set("(", map.get("(") + 1);
        path.push(")");
        map.set(")", map.get(")") - 1);
        helper(new Map(map), path.slice(), ")");
      } else {
        path.push(")");
        map.set(")", map.get(")") - 1);
        helper(new Map(map), path.slice(), ")");
      }
    } else {
      if (map.get("(") === 0) {
        let temp = map.get(')');
        while(temp) {
          path.push(")");
          temp--
        }
        rtn.push(path.join(''));
        return;
      }
      let flag = map.get(")") - map.get("(");
      if (flag === 0) {
        path.push("(");
        map.set("(", map.get("(") - 1);
        helper(new Map(map), path.slice(), "(");
      } else if (flag > 0) {
        path.push("(");
        map.set("(", map.get("(") - 1);
        helper(new Map(map), path.slice(), "(");
        path.pop();
        map.set("(", map.get("(") + 1);
        path.push(")");
        map.set(")", map.get(")") - 1);
        helper(new Map(map), path.slice(), ")");
      }
    }
  };
  helper(map, path, ")");
  return rtn;
};

console.log(generateParenthesis(3));
