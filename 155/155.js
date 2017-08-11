/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.array = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.array.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.array.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return Math.min.apply(null, this.array);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */