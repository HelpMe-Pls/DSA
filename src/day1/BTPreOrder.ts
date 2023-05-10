function steps(currentNode: BinaryNode<number> | null, path: number[]): number[] {
  // Base case:
  if (!currentNode) return path

  // Recursive calls
  // Pre-recurse:
  path.push(currentNode.value)

  // Recursion:
  steps(currentNode.left, path)
  steps(currentNode.right, path)


  // Post-recurse:
  return path
}

export default function pre_order_search(root: BinaryNode<number>): number[] {
  return steps(root, [])
}