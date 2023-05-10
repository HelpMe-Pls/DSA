function steps(currentNode: BinaryNode<number> | null, path: number[]): number[] {
  // Base case:
  if (!currentNode) return path

  // Recursive calls
  // Pre-recurse:

  // Recursion:
  steps(currentNode.left, path)
  path.push(currentNode.value)
  steps(currentNode.right, path)


  // Post-recurse:
  return path
}

export default function in_order_search(root: BinaryNode<number>): number[] {
  return steps(root, [])
}