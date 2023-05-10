export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null | undefined)[] = [head]

  while (q.length) {
    const currentNode = q.shift()

    if (!currentNode) continue

    if (currentNode.value === needle) return true

    q.push(currentNode.left)
    q.push(currentNode.right)
  }

  return false
}