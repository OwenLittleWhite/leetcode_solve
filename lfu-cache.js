/**
 * 设计并实现最不经常使用（LFU）缓存的数据结构。它应该支持以下操作：get 和 put。

get(key) - 如果键存在于缓存中，则获取键的值（总是正数），否则返回 -1。
put(key, value) - 如果键不存在，请设置或插入值。当缓存达到其容量时，它应该在插入新项目之前，使最不经常使用的项目无效。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，最近最少使用的键将被去除。

一个项目的使用次数就是该项目被插入后对其调用 get 和 put 函数的次数之和。使用次数会在对应项目被移除后置为 0。

进阶：
你是否可以在 O(1) 时间复杂度内执行两项操作？
*/
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity;
  this.arr = [];
  this.map = new Map();
  this.freMap = new Map();
  this.minFre = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  let data = this.map.get(key);
  if (data) {
    let arr = this.freMap.get(data.cnt);
    let index = arr.indexOf(key);
    arr.splice(index, 1);
    this.freMap.set(data.cnt, arr);
    if (arr.length === 0 && this.minFre === data.cnt) {
      this.minFre = this.minFre + 1;
    }
    data.cnt = data.cnt + 1;
    let _arr = this.freMap.get(data.cnt) || [];
    _arr.push(key);
    this.freMap.set(data.cnt, _arr);
    this.map.set(key, data);
    return data.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  let data = this.map.get(key);
  if (data) {
    let arr = this.freMap.get(data.cnt);
    let index = arr.indexOf(key);
    arr.splice(index, 1);
    this.freMap.set(data.cnt, arr);
    if (arr.length === 0 && this.minFre === data.cnt) {
      this.minFre = this.minFre + 1;
    }
    data.cnt = data.cnt + 1;
    let _arr = this.freMap.get(data.cnt) || [];
    _arr.push(key);
    this.freMap.set(data.cnt, _arr);
    data.value = value;
    this.map.set(key, data);
  } else {
    if (this.capacity === 0) {
      return;
    }
    if (this.map.size === this.capacity) {
      let _arr = this.freMap.get(this.minFre);
      let _key = _arr.shift();
      this.map.delete(_key);
      this.freMap.set(this.minFre, _arr);
    }
    this.map.set(key, {
      cnt: 1,
      value
    });
    this.minFre = 1;
    let arr = this.freMap.get(1) || [];
    arr.push(key);
    this.freMap.set(1, arr);
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
