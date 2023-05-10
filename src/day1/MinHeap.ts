export default class MinHeap {
    public length: number;
    private data: number[]

    constructor() {
        this.data = []
        this.length = 0
    }

    // Get the parent node's index of a node
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }
    private leftChild(idx: number): number {
        return 2 * idx + 1
    }
    private rightChild(idx: number): number {
        return 2 * idx + 2
    }
    private heapifyUp(idx: number): void {
        // Base case: reached the root
        if (idx == 0) return

        const parentIndex = this.parent(idx)
        const parentValue = this.data[parentIndex]
        const nodeValue = this.data[idx]

        if (parentValue > nodeValue) {
            // Swap the current node with its parent
            this.data[idx] = parentValue
            this.data[parentIndex] = nodeValue

            this.heapifyUp(parentIndex)
        }
    }
    private heapifyDown(idx: number): void {
        const leftChildIndex = this.leftChild(idx)
        const rightChildIndex = this.rightChild(idx)
        const leftChildValue = this.data[leftChildIndex]
        const rightChildValue = this.data[rightChildIndex]
        const nodeValue = this.data[idx]

        // Base case: reached a leaf or beyond
        if (idx >= this.length || leftChildIndex >= this.length) return

        // The right child is smallest
        if (leftChildValue > rightChildValue && nodeValue > rightChildValue) {
            // Swap the current node with its right child
            this.data[idx] = rightChildValue
            this.data[rightChildIndex] = nodeValue
            this.heapifyDown(rightChildIndex)
        } else if (rightChildValue > leftChildValue && nodeValue > leftChildValue) {
            // Swap the current node with its left child
            this.data[idx] = leftChildValue
            this.data[leftChildIndex] = nodeValue
            this.heapifyDown(leftChildIndex)
        }
    }

    insert(value: number): void {
        // Insert the new node at the tree's height
        this.data[this.length] = value

        // Bubble up the smallest node so that the minHeap remains its structure
        this.heapifyUp(this.length++)
    }
    delete(): number {
        if (this.length === 0) return -1

        // Deletion always starts at the root
        const value = this.data[0]
        this.length--
        if (this.length === 0) {
            this.data = []
            return value
        }

        // Get the leaf node at the tree's height and place it at the root, then drill it down so that the minHeap remains its structure
        this.data[0] = this.data[this.length]
        this.heapifyDown(0)

        return value
    }
}