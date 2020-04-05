// https://leetcode-cn.com/problems/lfu-cache/

// 不行啦，错一次改一次，每次能过几个case，但理ac还差几个，弃疗。
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.obj = {};
  this.capacity = capacity;
  this.queue = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if (this.obj[key] !== undefined) {
    this.queue.push(String(key));
    this.obj[key].visitedCnt++;
    return this.obj[key].value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (!this.capacity) return;
  const totalKey = Object.keys(this.obj).length;
//   console.log(this.obj, this.capacity);
  if (!this.obj[key] && totalKey >= this.capacity) {
    let arr = Object.keys(this.obj)
      .map(key => ({key: key, ...this.obj[key]}))
      .sort((a, b) => a.visitedCnt - b.visitedCnt);
    // console.log('this.queue', this.queue, arr, arr[0].visitedCnt, arr[1].visitedCnt, arr[0].visitedCnt === arr[1].visitedCnt);
    let deletedKey = arr[0].key;
    if (arr[1] && arr[0].visitedCnt === arr[1].visitedCnt) {
      let index0 = this.queue.length - 1 - this.queue.map(item => item).reverse().findIndex(item => item === arr[0].key);
      let index1 = this.queue.length - 1 - this.queue.map(item => item).reverse().findIndex(item => item === arr[1].key);
      //   console.log('index', index0, index1, this.queue.map(item => item).reverse().findIndex(item => item === arr[1].key));
      
      index0 < index1 ? delete this.obj[arr[0].key] : delete this.obj[arr[1].key];
      if (!(index0 < index1)) {
        deletedKey = arr[1].key;
      }
    } else {
      delete this.obj[arr[0].key];
    }
    // console.log('deletedKey', deletedKey);
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i] === deletedKey) {
        this.queue.splice(i, 1);
      }
    }
  }
  this.queue.push(String(key));
  if (this.obj[key]) {
    this.obj[key].value = value;
    this.obj[key].visitedCnt++;
  } else {
    this.obj[key] = {value};
    this.obj[key].visitedCnt = 0;
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
