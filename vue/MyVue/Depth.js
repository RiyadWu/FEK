/**
 * Depth 类
 * 会在 observableTarget 中的属性发生变化时，遍历所有watcher并调用其回调
 */
class Depth {
  /**
    * 构造函数
    * @param {array} subs 收集的watcher
    * @param {string} key 指定的观察属性
    * @param {function} cb 回调函数
  */
  constructor() {
    this.subs = []
  }
  addSubs(sub) {
    this.subs.push(sub)
  }
  notify() {
    this.subs.forEach(item => {
      item.update()
    })
  }
}