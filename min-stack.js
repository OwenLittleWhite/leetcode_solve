/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.arr = [];
  this.helper = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  if (this.helper.length === 0 || x <= this.helper[this.helper.length - 1]) {
      this.helper.push(x);
  }
  this.arr.push(x);

};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  let x = this.arr.pop();
  if (x === this.helper[this.helper.length - 1]) {
      this.helper.pop();
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.helper[this.helper.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
