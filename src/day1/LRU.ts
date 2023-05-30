function createNode<V>(value: V): ListNode<V> {
    return { value }
}

export default class LRU<K, V> {
    private length: number;
    private head?: ListNode<V>
    private tail?: ListNode<V>
    private lookup: Map<K, ListNode<V>>
    private reverseLookup: Map<ListNode<V>, K>  // for clean up

    private detach(node: ListNode<V>): void {
        if (node.prev) node.prev.next = node.next
        if (node.next) node.next.prev = node.prev

        if (this.head === node) this.head = this.head.next
        if (this.tail === node) this.tail = this.tail.prev

        node.prev = undefined
        node.next = undefined
    }
    private prepend(node: ListNode<V>): void {
        if (!this.head) {
            this.head = this.tail = node
            return
        }

        node.next = this.head
        this.head.prev = node
        this.head = node
    }
    private trimCache(): void {
        if (this.length <= this.capacity) return

        const tail = this.tail as ListNode<V>
        this.detach(this.tail as ListNode<V>)

        const key = this.reverseLookup.get(tail) as K
        this.lookup.delete(key)
        this.reverseLookup.delete(tail)
        this.length--
    }

    constructor(private capacity: number) {
        // `capacity` remains constant throughout the lifetime of the LRU object.
        this.length = 0
        this.head = this.tail = undefined
        this.lookup = new Map<K, ListNode<V>>()
        this.reverseLookup = new Map<ListNode<V>, K>()
    }

    update(key: K, value: V): void {
        // check the cache for key existence
        let node = this.lookup.get(key)
        if (!node) {
            node = createNode(value)
            this.length++
            this.prepend(node)
            this.trimCache()    // to make sure our cache doesn't exceed the `capacity`

            this.lookup.set(key, node)
            this.reverseLookup.set(node, key)
        }
        else {
            this.detach(node)
            this.prepend(node)
            node.value = value
        }
    }
    get(key: K): V | undefined {
        // check the cache for key existence
        const node = this.lookup.get(key)
        if (!node) return undefined

        // update the value we found and move it to the front 
        this.detach(node)
        this.prepend(node)

        // return the value (if found) or `undefined` if it's not exist
        return node.value

    }
}