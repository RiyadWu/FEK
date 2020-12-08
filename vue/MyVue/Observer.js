/**
 * 将 data 中的 key 属性转换为 observerable 属性
 * 
 * observerable 属性是指实现了自己的 getter setter 方法的属性
 * 
 * @param {object} data 
 * @param {string} key 
 * @param {*} val 
 */
function defineReactive(data, key, val) {
    let watcher
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if (currentWatcher) {
                watcher = currentWatcher
            }
            return val
        },
        set: function(newVal) {
            if (newVal === val) {
                return
            }
            val = newVal
            watcher.update()
        }
    });
}

/**
 * TODO：可以借助 defineReactive 函数实现
 * 
 * 将一个 js 对象转换成 observerable 对象
 * observerable 对象是所有的属性都是 observerable 属性的对象
 * 
 * @param {object} data 
 */
function observe(data) {
    
}
