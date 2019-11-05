/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.s1 = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */

MyQueue.prototype.push = function (x) {
  this.s1.push(x)
}
/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const s2 = []
  for (let i = 0, size = this.s1.length; i < size; i++) {
    s2.push(this.s1.pop())
  }
  const pop = s2.pop()
  for (let i = 0, size = s2.length; i < size; i++) {
    this.s1.push(s2.pop())
  }
  return pop
}
/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const s2 = []
  for (let i = 0, size = this.s1.length; i < size; i++) {
    s2.push(this.s1.pop())
  }
  const peek = s2[s2.length - 1]
  for (var j = 0, size = s2.length; j < size; j++) {
    this.s1.push(s2.pop())
  }
  return peek
}
/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
var queue = new MyQueue()
queue.push(1)
queue.push(2)
console.log(queue.peek()) // 返回 1
console.log(queue.pop()) // 返回 1
console.log(queue.empty()) // 返回 false
