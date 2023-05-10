export default class DoublyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined
    }

    private getAt(idx: number): ListNode<T> | undefined {
        let currentNode = this.head

        // Traverse the list to position `idx` 
        for (let i = 0; currentNode && i < idx; ++i) {
            currentNode = currentNode.next
        }

        return currentNode
    }

    private removeNode(node: ListNode<T>): T | undefined {
        this.length--

        // Remove the only item left in the list
        if (this.length === 0) {
            const val = this.head?.value
            this.head = this.tail = undefined
            return val
        }

        // Update the `node` links to point to its adjacent nodes, getting ready for the "unlink" step
        if (node.prev) node.prev.next = node.next
        if (node.next) node.next.prev = node.prev

        // Same case but `node` is either head or tail
        if (node == this.head) this.head = node.next
        if (node == this.tail) this.tail = node.prev

        // Unlink the current node
        node.prev = node.next = undefined

        return node.value
    }

    prepend(item: T): void {
        this.length++
        const newNode = { value: item } as ListNode<T>

        if (!this.head) {
            this.head = this.tail = newNode
            return
        }

        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) throw new Error('The index to be inserted at is out of bound')

        if (idx === this.length) {
            this.append(item)
            return
        }
        else if (idx === 0) {
            this.prepend(item)
            return
        }

        this.length++
        let currentNode = this.getAt(idx) as ListNode<T>
        const newNode = { value: item } as ListNode<T>

        newNode.next = currentNode  // F -> C
        newNode.prev = currentNode.prev // B <- F
        currentNode.prev = newNode  // F <- C

        if (currentNode.prev) currentNode.prev.next = newNode
    }

    append(item: T): void {
        this.length++
        const newNode = { value: item } as ListNode<T>

        if (!this.tail) {
            this.head = this.tail = newNode
            return
        }

        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }

    remove(item: T): T | undefined {
        let currentNode = this.head

        // Traverse the list to the position of `item` 
        for (let i = 0; currentNode && i < this.length; ++i) {
            if (currentNode.value === item) break
            currentNode = currentNode.next
        }

        // Empty list
        if (!currentNode) return undefined

        return this.removeNode(currentNode)
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx)

        if (!node) return undefined
        return this.removeNode(node)
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value
    }
}