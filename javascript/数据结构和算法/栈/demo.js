/**
 * 实现一个Stack类
 * @type {Array}
 */
class Stack {
    constructor() {
        this.dataStore = []
        this.top = 0
        this.length = this.dataStore.length
    }
    push (element) {
        this.dataStore[this.top++] = element
    }
    pop () {
        return this.dataStore[--this.top]
    }
}
