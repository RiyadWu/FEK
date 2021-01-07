/**
 * Watcher 类
 * 会在 observableTarget 中的属性发生变化时，执行对应的回调函数
 */
class Watcher {
    /**
     * 构造函数
     * @param {observable} observableTarget 观察对象
     * @param {string} key 指定的观察属性
     * @param {function} cb 回调函数
     */
    constructor(observableTarget, key, cb) {
        this.cb = cb
        this.key = key
        this.observableTarget = observableTarget
        // 把自己注册到 Depth 中
        this.registerSelf()
    }

    /**
     * 调用 update 函数的时，执行 cb 函数,
     * cb 函数的参数是 observableTarget 的 key 属性值
     */
    update() {
        const value = this.observableTarget[this.key]
        this.cb(value)
    }

    /**
     * TODO
     * 将 index.html 中原来的注册逻辑移到这里，借助 this 来实现。
     */
    registerSelf() {
        currentWatcher = this
        const value = this.observableTarget[this.key]
        currentWatcher = null
    }

}