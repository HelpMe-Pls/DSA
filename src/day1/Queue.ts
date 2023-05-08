type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        const newNode = { value: item } as Node<T>
        this.length++

        if (!this.tail) {
            this.head = this.tail = newNode
            return
        }

        this.tail.next = newNode
        this.tail = newNode
    }

    deque(): T | undefined {    // works like array.shift()
        if (!this.head) return undefined

        this.length--

        const head = this.head
        this.head = this.head.next      // unlink the head by having its `next` point to itself
        head.next = undefined           // isolate the "shifted" head   

        if (this.length == 0) this.tail = undefined

        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}