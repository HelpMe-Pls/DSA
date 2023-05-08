type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>

    constructor() {
        this.head = this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        const newNode = { value: item } as Node<T>

        this.length++

        if (!this.head) {
            this.head = newNode
            return
        }

        newNode.prev = this.head
        this.head = newNode
    }

    pop(): T | undefined {
        if (!this.head) return undefined

        this.length--

        const head = this.head
        this.head = head.prev           // unlink the head
        head.prev = undefined           // isolate the "shifted" head   

        if (this.length == 0) this.head = undefined

        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}